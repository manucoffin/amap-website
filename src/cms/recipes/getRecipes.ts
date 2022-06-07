import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Recipe } from '@cms/models';
import { getFilePaths } from '@cms/lib/utils';
import { RECIPES_DIR } from '@core/constants';

const dirPath = join(process.cwd(), RECIPES_DIR);

export const getRecipes = async (): Promise<Recipe[]> => {
  const filesPaths = getFilePaths(dirPath);

  const recipesPromises = filesPaths.map(async (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    const date = new Intl.DateTimeFormat('fr', {
      dateStyle: 'full',
    }).format(data.date);

    return { ...data, date } as Recipe;
  });

  const recipes = await Promise.all(recipesPromises);

  return recipes;
};
