import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Contract } from '@cms/models';
import { CONTRACTS_DIR } from '@core/constants';

const dirPath = join(process.cwd(), CONTRACTS_DIR);

export const getContract = (slug: string): Contract => {
  const filePath = join(dirPath, `${slug}.md`);

  const fileStats = fs.statSync(filePath);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const contract = {
    updatedAt: fileStats.mtime.toString(),
    slug: path.basename(filePath, '.md'),
    ...(data as Contract),
  };

  return contract;
};
