import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { Producer } from '@cms/models';
import { getSlugs } from '@cms/lib/utils';

const dirPath = join(process.cwd(), 'content/producers');

export const getProducers = async (): Promise<Producer[]> => {
  const producerIds = getSlugs(dirPath);

  const producersPromises = producerIds.map(async (id) => {
    const filePath = join(dirPath, `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return { ...data, slug: path.basename(filePath, '.md') } as Producer;
  });

  const producers = await Promise.all(producersPromises);

  return producers;
};
