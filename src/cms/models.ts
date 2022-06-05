import { Contract as NetlifyContract } from './netlify-entities';

export type {
  Amap,
  Contact,
  Address,
  Membership,
  Convention,
  Statutes,
  Tutor,
  Producer,
  Article,
} from './netlify-entities';

export type Contract = NetlifyContract & { updatedAt: string; slug: string };
