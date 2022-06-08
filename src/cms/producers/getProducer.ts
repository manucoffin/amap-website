import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Producer } from '@cms/models';
import { PRODUCERS_DIR } from '@core/constants';

const dirPath = join(process.cwd(), PRODUCERS_DIR);

export const getProducer = async (slug: string): Promise<Producer> => {
  const filePath = join(dirPath, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return { ...data, slug: path.basename(filePath, '.md') } as Producer;
};
