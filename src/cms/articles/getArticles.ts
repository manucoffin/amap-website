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

    const article = {
      ...data,
      content,
      date: data.date.toString(),
      slug: path.basename(filePath, '.md'),
    } as Article;

    return article;
  });

  const articles = await Promise.all(promises);

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
