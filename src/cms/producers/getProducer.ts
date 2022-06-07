import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Producer } from '@cms/models';

const dirPath = join(process.cwd(), 'content/producers');

export const getProducer = (id: string): Producer => {
  const filePath = join(dirPath, `${id}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  // get contracts
  const tutor = {
    ...data,
  } as Producer;

  return tutor;
};
