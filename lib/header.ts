import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

export type HeaderData = {
  title: String;
};

// path to our list of available posts
const HEADER_PATH = join(process.cwd(), "content/header.md");

export const getHeader = (): HeaderData => {
  const fileContents = fs.readFileSync(HEADER_PATH, "utf-8");
  // get the front matter data and content
  const { data, content } = matter(fileContents);
  console.log(data, content);
  // return the front matter data and content
  return { title: "KLALAL" };
};
