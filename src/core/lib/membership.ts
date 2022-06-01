import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Membership } from '@cms/models';

const MEMBERSHIP_PATH = join(process.cwd(), 'content/membership.md');

export const getMembershipData = (): Membership => {
  const fileContents = fs.readFileSync(MEMBERSHIP_PATH, 'utf-8');
  const { data, content } = matter(fileContents);
  const membershipData = { description: content, documentPath: data } as Membership;

  return membershipData;
};
