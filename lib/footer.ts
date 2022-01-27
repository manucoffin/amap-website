import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

export type FooterData = {
  title: String;
};

// path to our list of available posts
const FOOTER_PATH = join(process.cwd(), "content/footer.md");

export const getFooter = (): FooterData => {
  const fileContents = fs.readFileSync(FOOTER_PATH, "utf-8");
  // get the front matter data and content
  const { data, content } = matter(fileContents);
  console.log(data, content);
  // return the front matter data and content
  return { title: "FOOTER" };
};
