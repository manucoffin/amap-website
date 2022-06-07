import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Article } from '@cms/models';
import { getFilePaths } from '@cms/lib/utils';
import { ARTICLES_DIR } from '@core/constants';

const dirPath = join(process.cwd(), ARTICLES_DIR);

export const getArticles = async (): Promise<Article[]> => {
  const filesPaths = getFilePaths(dirPath);

  const promises = filesPaths.map(async (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const date = new Intl.DateTimeFormat('fr', {
      dateStyle: 'full',
    }).format(data.date);

    const article = {
      ...data,
      content,
      date,
      slug: path.basename(filePath, '.md'),
    } as Article;

    return article;
  });

  const articles = await Promise.all(promises);

  return articles.sort((a, b) => (a.date > b.date ? 1 : -1));
};
