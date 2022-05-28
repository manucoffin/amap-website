import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// path to our list of available posts
const LEGAL_PATH = join(process.cwd(), 'content/legal.md');
const PRIVACYPOLICY_PATH = join(process.cwd(), 'content/privacy-policy.md');

export const getLegalText = (): string => {
  const fileContent = fs.readFileSync(LEGAL_PATH, 'utf-8');
  const { content } = matter(fileContent);

  return content;
};

export const getPrivacyPolicyText = (): string => {
  const fileContent = fs.readFileSync(PRIVACYPOLICY_PATH, 'utf-8');
  const { content } = matter(fileContent);

  return content;
};
