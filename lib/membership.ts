import { join } from "path";
import fs from "fs";
import { Membership } from "./netlify-types";
import matter from "gray-matter";

const MEMBERSHIP_PATH = join(process.cwd(), "content/membership.md");

export const getMembershipData = (): Membership => {
  const fileContents = fs.readFileSync(MEMBERSHIP_PATH, "utf-8");
  const { data } = matter(fileContents);
  const membershipData = data as Membership;

  return { ...membershipData };
};
