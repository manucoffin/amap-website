import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Article } from '@cms/models';
import { ARTICLES_DIR } from '@core/constants';

const dirPath = join(process.cwd(), ARTICLES_DIR);

export const getArticle = async (slug: string): Promise<Article> => {
  const filePath = join(dirPath, `${slug}.md`);

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
};
