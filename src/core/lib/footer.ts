import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Footer } from './netlify-types';

// path to our list of available posts
const FOOTER_PATH = join(process.cwd(), 'content/footer.md');

export const getFooter = (): Footer => {
  const fileContents = fs.readFileSync(FOOTER_PATH, 'utf-8');
  const { data } = matter(fileContents);
  const footer = data as Footer;

  return { ...footer };
};
