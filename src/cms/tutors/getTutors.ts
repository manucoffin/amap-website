import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Tutor } from '@cms/models';

const dirPath = join(process.cwd(), 'content/tutors');

export const getTutors = async (ids: string[]): Promise<Tutor[]> => {
  const tutorsPromises = ids.map(async (id) => {
    const filePath = join(dirPath, `${id}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return data as Tutor;
  });

  const tutors = await Promise.all(tutorsPromises);

  return tutors;
};
