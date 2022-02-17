import matter, { GrayMatterFile } from "gray-matter";
import { join } from "path";
import fs from "fs";
import { Contrats as NetlifyContract } from "./netlify-types";

const CONTRACTS_PATH = join(process.cwd(), "content/contracts");

export type Contract = NetlifyContract & { updatedAt: string };

const getContractsFilePaths = (): string[] => {
  const filesPath = fs
    .readdirSync(CONTRACTS_PATH)
    .filter((path) => /\.md?$/.test(path));
  return filesPath.map((path) => join(CONTRACTS_PATH, path));
};

const getContractData = (filePath: string): Contract => {
  const fileStats = fs.statSync(filePath);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const contract = {
    updatedAt: fileStats.mtime.toString(),
    ...(data as NetlifyContract),
  };

  return contract;
};

export const getAllContracts = (): Contract[] => {
  const filePaths = getContractsFilePaths();
  const contracts = filePaths
    .map((filePath) => getContractData(filePath))
    .sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1));

  return contracts;
};
