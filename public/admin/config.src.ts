// CMS config that has to be converted to yaml, read more:
// https://www.marcveens.nl/posts/netlify-cms-generate-config-yml
import { metadata } from './collections/metadata';
import { pages } from './collections/pages';
import { tutors } from './collections/tutors';
import { articles } from './collections/articles';
import { contracts } from './collections/contracts';
import { producers } from './collections/producers';
import { recipes } from './collections/recipes';

export const config = {
  backend: {
    name: 'git-gateway',
    repo: process.env.NEXT_PUBLIC_GIT_REPO,
    branch: 'main',
    identity_url: process.env.NEXT_PUBLIC_IDENTITY_URL,
    gateway_url: process.env.NEXT_PUBLIC_GATEWAY_URL,
  },
  local_backend: process.env.NODE_ENV === 'development',
  cms_manual_init: true,
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  publish_mode: 'editorial_workflow',
  locale: 'fr',
  slug: { encoding: 'ascii', clean_accents: true },
  collections: [metadata, pages, tutors, articles, contracts, producers, recipes],
};
