import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Tutor } from '@cms/models';

const dirPath = join(process.cwd(), 'content/tutors');

export const getTutor = async (id: string): Promise<Tutor> => {
  const filePath = join(dirPath, `${id}.md`);

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const tutor = {
    ...data,
  } as Tutor;

  return await tutor;
};
