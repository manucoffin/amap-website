import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Amap } from '@cms/models';

const filePath = join(process.cwd(), 'content/site_metadata/amap.md');

export const getAmap = (): Amap => {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents);
  return data as Amap;
};
