import fs from "fs";
import path, { join } from "path";

export const truncateText = (str: string, length: number): string => {
  return str.length > length ? `${str.substring(0, length)}...` : str;
};

export const getFilePaths = (rootPath: string): string[] => {
  const filesPath = fs
    .readdirSync(rootPath)
    .filter((path) => /\.md?$/.test(path));
  return filesPath.map((path) => join(rootPath, path));
};

export const getSlugs = (rootPath: string): string[] => {
  const slugs = fs.readdirSync(rootPath).filter((path) => /\.md?$/.test(path));

  return slugs.map((path) => path.split(".md").shift());
};
