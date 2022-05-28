import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Membership } from './netlify-types';

const MEMBERSHIP_PATH = join(process.cwd(), 'content/membership.md');

export const getMembershipData = (): Membership => {
  const fileContents = fs.readFileSync(MEMBERSHIP_PATH, 'utf-8');
  const { data } = matter(fileContents);
  const membershipData = data as Membership;

  return { ...membershipData };
};
