import { Contract as NetlifyContract, Article as NetlifyArticle } from './netlify-entities';

export type {
  Amap,
  Contact,
  Address,
  Membership,
  Convention,
  Statutes,
  Tutor,
  Producer,
  Recipe,
} from './netlify-entities';

export type Contract = NetlifyContract & { updatedAt: string; slug: string };
export type Article = NetlifyArticle & {
  slug: string;
  content: string;
};
