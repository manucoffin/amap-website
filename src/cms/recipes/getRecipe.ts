import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Recipe } from '@cms/models';
import { RECIPES_DIR } from '@core/constants';

const dirPath = join(process.cwd(), RECIPES_DIR);

export const getRecipe = async (slug: string): Promise<Recipe> => {
  const filePath = join(dirPath, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const date = new Intl.DateTimeFormat('fr', {
    dateStyle: 'full',
  }).format(data.date);

  return { ...data, date, slug: path.basename(filePath, '.md') } as Recipe;
};
