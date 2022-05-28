import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { getFilePaths, getSlugs } from './backendUtils';
import { Article as NetlifyArticle } from './netlify-types';

const ARTICLES_PATH = join(process.cwd(), 'content/articles');

export type Article = NetlifyArticle & {
  slug: string;
  content: string;
};

export const getArticlesSlugs = (): string[] => getSlugs(ARTICLES_PATH);

const getArticleData = async (filePath: string): Promise<Article> => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const date = new Intl.DateTimeFormat('fr', {
    dateStyle: 'full',
  }).format(data.date);

  const article = {
    slug: path.basename(filePath, '.md'),
    content,
    ...(data as NetlifyArticle),
    date,
  };

  return article;
};

export const getAllArticles = async (): Promise<Article[]> => {
  const filePaths = getFilePaths(ARTICLES_PATH);
  const articlesPromises = filePaths.map(async (filePath) => await getArticleData(filePath));

  const articles = await Promise.all(articlesPromises);

  return articles.sort((a, b) => (a.date > b.date ? 1 : -1));
};

export const getArticle = async (slug: string): Promise<Article> => {
  const filePath = join(ARTICLES_PATH, `${slug}.md`);

  return await getArticleData(filePath);
};
