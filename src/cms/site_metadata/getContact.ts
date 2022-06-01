import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Contact } from '@cms/models';

const FILE_PATH = join(process.cwd(), 'content/site_metadata/contact.md');

export const getContact = (): Contact => {
  const fileContents = fs.readFileSync(FILE_PATH, 'utf-8');
  const { data } = matter(fileContents);
  return data as Contact;
};
