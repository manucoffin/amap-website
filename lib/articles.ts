import matter, { GrayMatterFile } from "gray-matter";
import path, { join } from "path";
import fs from "fs";
import { Article as NetlifyArticle } from "./netlify-types";
import { getFilePaths, getSlugs } from "./utils";

const ARTICLES_PATH = join(process.cwd(), "content/articles");

export type Article = NetlifyArticle & {
  slug: string;
  content: string;
};

export const getArticlesSlugs = (): string[] => getSlugs(ARTICLES_PATH);

const getArticleData = (filePath: string): Article => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const article = {
    slug: path.basename(filePath, ".md"),
    content,
    ...(data as NetlifyArticle),
    date: (data as NetlifyArticle).date.toString(),
  };

  return article;
};

export const getAllArticles = (): Article[] => {
  const filePaths = getFilePaths(ARTICLES_PATH);
  const articles = filePaths
    .map((filePath) => getArticleData(filePath))
    .sort((a, b) => (a.date > b.date ? 1 : -1));

  return articles;
};

export const getArticle = (slug: string): Article => {
  const filePath = join(ARTICLES_PATH, `${slug}.md`);

  return getArticleData(filePath);
};
