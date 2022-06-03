import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Membership } from '@cms/models';

const filePath = join(process.cwd(), 'content/pages/membership.md');

export const getMembership = (): Membership => {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);
  const membershipData = { description: content, documentPath: data } as Membership;

  return membershipData;
};
