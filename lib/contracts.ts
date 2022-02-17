import matter, { GrayMatterFile } from "gray-matter";
import { join } from "path";
import fs from "fs";
import { Contrats } from "./netlify-types";

const CONTRACTS_PATH = join(process.cwd(), "content/contracts");

const getContractsFilePaths = (): string[] => {
  const filesPath = fs
    .readdirSync(CONTRACTS_PATH)
    .filter((path) => /\.md?$/.test(path));
  return filesPath.map((path) => join(CONTRACTS_PATH, path));
};

const getContractData = (filePath: string): Contrats => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const contract = data as Contrats;

  return contract;
};

export const getAllContracts = (): Contrats[] => {
  const filePaths = getContractsFilePaths();
  const contracts = filePaths.map((filePath) => getContractData(filePath));
  // .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));

  return contracts;
};
