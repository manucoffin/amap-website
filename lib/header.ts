import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import { Header } from "./netlify-types";

// path to our list of available posts
const HEADER_PATH = join(process.cwd(), "content/header.md");

export const getHeader = (): Header => {
  const fileContents = fs.readFileSync(HEADER_PATH, "utf-8");
  const { data } = matter(fileContents);
  const header = data as Header;

  return { ...header };
};
