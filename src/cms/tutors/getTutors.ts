import { getFilePaths } from '@cms/lib/utils';
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Tutor } from '@cms/models';
import { TUTORS_DIR } from '@core/constants';

const dirPath = join(process.cwd(), TUTORS_DIR);

// Returns all existing tutors
export const getTutors = async (): Promise<Tutor[]> => {
  const tutorFilesPaths = getFilePaths(dirPath);

  const tutorsPromises = tutorFilesPaths.map(async (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return data as Tutor;
  });

  const tutors = await Promise.all(tutorsPromises);

  return tutors;
};
