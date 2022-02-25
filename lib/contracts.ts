import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';
import { getFilePaths, getSlugs } from './backendUtils';
import { Contract as NetlifyContract } from './netlify-types';

const CONTRACTS_PATH = join(process.cwd(), 'content/contracts');

export type Contract = NetlifyContract & { updatedAt: string; slug: string };

export const getContractsSlugs = (): string[] => getSlugs(CONTRACTS_PATH);

const getContractData = (filePath: string): Contract => {
  const fileStats = fs.statSync(filePath);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const contract = {
    updatedAt: fileStats.mtime.toString(),
    slug: path.basename(filePath, '.md'),
    ...(data as NetlifyContract),
  };

  return contract;
};

export const getAllContracts = (): Contract[] => {
  const filePaths = getFilePaths(CONTRACTS_PATH);
  const contracts = filePaths
    .map((filePath) => getContractData(filePath))
    .sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1));

  return contracts;
};

export const getContract = (slug: string): Contract => {
  const filePath = join(CONTRACTS_PATH, `${slug}.md`);

  return getContractData(filePath);
};
