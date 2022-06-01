import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { MainLayout } from 'src/core/layouts';
import { Article, getAllArticles } from 'src/core/lib/articles';
import { Contract, getAllContracts } from 'src/core/lib/contracts';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from '@cms/models';
import { getStaticPages, StaticPage } from 'src/core/lib/pages';
import { ButtonLink, Header } from '@src/core/components';
import { Routes } from '@src/core/constants/routes';

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
      footerVariant="minimal"
      className="bg-concrete bg-repeat pb-20"
    >
      <Header />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <h1 className="text-center font-heading font-bold text-2xl md:text-3xl mb-10 text-gray-700">
          Plan du site
        </h1>

        <h2 className="text-2xl text-primary-700 font-bold mb-2">Amap de la Goutte d&apos;Eau</h2>
        <ul className="list-disc list-inside">
          {staticPages.map((page, index) => {
            return (
              <li key={index}>
                <ButtonLink
                  href={page.slug}
                  size="base"
                  className="text-gray-700 hover:text-primary-700 transition"
                >
                  {page.title}
                </ButtonLink>
              </li>
            );
          })}
        </ul>

        <h2 className="text-2xl text-primary-700 font-bold mb-2 mt-10">Contrats</h2>
        <ul className="list-disc list-inside">
          {contracts.map((contract, index) => {
            return (
              <li key={index}>
                <ButtonLink
                  href={Routes.ContractPage({ contractId: contract.slug })}
                  size="base"
                  className="text-gray-700 hover:text-primary-700 transition"
                >
                  {contract.title}
                </ButtonLink>
              </li>
            );
          })}
        </ul>

        <h2 className="text-2xl text-primary-700 font-bold mb-2 mt-10">Actualités</h2>
        <ul className="list-disc list-inside">
          {newsArticles.map((article, index) => {
            return (
              <li key={index}>
                <ButtonLink
                  href={Routes.ArticlePage({ articleId: article.slug })}
                  size="base"
                  className="text-gray-700 hover:text-primary-700 transition"
                >
                  {article.title}
                </ButtonLink>
              </li>
            );
          })}
        </ul>
      </div>
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
  const staticPages = getStaticPages();
  const newsArticles = (await getAllArticles()) || [];
  const contracts = getAllContracts() || [];

  return {
    props: { footerData, staticPages, newsArticles, contracts },
  };
};

export default PrivacyPolicyPage;
