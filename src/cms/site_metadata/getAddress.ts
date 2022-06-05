import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Address } from '@cms/models';

const filePath = join(process.cwd(), 'content/site_metadata/address.md');

export const getAddress = (): Address => {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents);
  return data as Address;
};
