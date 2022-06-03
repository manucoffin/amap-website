import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const filePath = join(process.cwd(), 'content/pages/legal-mentions.md');

export const getLegalMentions = (): string => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);

  return content;
};
