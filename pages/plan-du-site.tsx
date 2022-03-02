import fs from 'fs';
import { join } from 'path';
import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Link from 'next/link';
import { A } from 'components/ui';
import { MainLayout } from 'layouts';
import { Article, getAllArticles } from 'lib/articles';
import { Contract, getAllContracts } from 'lib/contracts';
import { getFooter } from 'lib/footer';
import { Footer } from 'lib/netlify-types';
import { PlasmicSitemap } from '../components/plasmic/amap_website/PlasmicSitemap';

type StaticPage = {
  slug: string;
  title: string;
};

const PrivacyPolicyPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  staticPages,
  newsArticles,
  contracts,
  footerData,
}) => {
  return (
    <MainLayout
      title="Plan du site"
      description="Plan du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      minimalFooter
    >
      <PlasmicSitemap
        staticPages={{
          render: (props, Component) => (
            <Component {...props}>
              <ul className="list-disc list-inside">
                {staticPages.map((page) => {
                  return (
                    <li>
                      <Link href={page.slug} passHref>
                        <A>{page.title}</A>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Component>
          ),
        }}
        contracts={{
          render: (props, Component) => (
            <Component {...props}>
              <ul className="list-disc list-inside">
                {contracts.map((contract) => {
                  return (
                    <li>
                      <Link href={`contrats/${contract.slug}`} passHref>
                        <A>{contract.title}</A>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Component>
          ),
        }}
        articles={{
          render: (props, Component) => (
            <Component {...props}>
              <ul className="list-disc list-inside">
                {newsArticles.map((article) => {
                  return (
                    <li>
                      <Link href={`actus/${article.slug}`} passHref>
                        <A>{article.title}</A>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Component>
          ),
        }}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  footerData: Footer;
  staticPages: StaticPage[];
  newsArticles: Article[];
  contracts: Contract[];
}> = async () => {
  const footerData = getFooter();

  const staticPages: StaticPage[] = fs
    .readdirSync(
      {
        development: 'pages',
        production: 'pages',
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        '404.tsx',
        '500.tsx',
        'admin.tsx',
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        'sitemap.xml.tsx',
        'plan-du-site.tsx',
        'actus',
        'contrats',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      // Extract the title of each page
      const fileContent = fs.readFileSync(join(process.cwd(), `pages/${staticPagePath}`), 'utf-8');
      const title = fileContent.match(/title="(.*?)"/g)[0].slice(7, -1);

      return { title, slug: staticPagePath.split('.tsx')[0] };
    })
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  const newsArticles = (await getAllArticles()) || [];
  const contracts = getAllContracts() || [];

  return {
    props: { footerData, staticPages, newsArticles, contracts },
  };
};

export default PrivacyPolicyPage;
