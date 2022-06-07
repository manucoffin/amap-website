import {
  Contract as NetlifyContract,
  Article as NetlifyArticle,
  Recipe as NetlifyRecipe,
  Producer as NetlifyProducer,
} from './netlify-entities';

export type {
  Amap,
  Contact,
  Address,
  Membership,
  Convention,
  Statutes,
  Tutor,
} from './netlify-entities';

export type Contract = NetlifyContract & { updatedAt: string; slug: string };

export type Article = NetlifyArticle & {
  slug: string;
  content: string;
};

export type Recipe = NetlifyRecipe & {
  slug: string;
};

export type Producer = NetlifyProducer & {
  slug: string;
};
