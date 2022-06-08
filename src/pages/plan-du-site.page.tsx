import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { MainLayout } from 'src/core/layouts';
import {
  getStaticPages,
  StaticPage,
  getAddress,
  getAmap,
  getContact,
  getContracts,
  Address,
  Amap,
  Contact,
  Article,
  Contract,
  getArticles,
  getRecipes,
  getProducers,
  Recipe,
  Producer,
} from '@cms';
import { ButtonLink, H1, Header } from '@src/core/components';
import { Routes } from '@core/constants/routes';

const PrivacyPolicyPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  staticPages,
  newsArticles,
  contracts,
  footerData,
  producers,
  recipes,
}) => {
  return (
    <MainLayout
      title="Plan du site"
      description="Plan du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      footerVariant="minimal"
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Plan du site</H1>

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
          <div>
            <h2 className="text-2xl text-primary-700 font-bold mb-2">
              Amap de la Goutte d&apos;Eau
            </h2>
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
          </div>

          <div>
            <h2 className="text-2xl text-primary-700 font-bold mb-2">Contrats</h2>
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
          </div>

          <div>
            <h2 className="text-2xl text-primary-700 font-bold mb-2">Producteurs</h2>
            <ul className="list-disc list-inside">
              {producers.map((producer, index) => {
                return (
                  <li key={index}>
                    <ButtonLink
                      href={Routes.ProducerPage({ slug: producer.slug })}
                      size="base"
                      className="text-gray-700 hover:text-primary-700 transition"
                    >
                      {producer.firstname} {producer.lastname}
                    </ButtonLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-primary-700 font-bold mb-2">Recettes</h2>
            <ul className="list-disc list-inside">
              {recipes.map((recipe, index) => {
                return (
                  <li key={index}>
                    <ButtonLink
                      href={Routes.RecipePage({ slug: recipe.slug })}
                      size="base"
                      className="text-gray-700 hover:text-primary-700 transition"
                    >
                      {recipe.title}
                    </ButtonLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-primary-700 font-bold mb-2">Actualités</h2>
            <ul className="list-disc list-inside">
              {newsArticles.map((article, index) => {
                return (
                  <li key={index}>
                    <ButtonLink
                      href={Routes.ArticlePage({ slug: article.slug })}
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
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  staticPages: StaticPage[];
  newsArticles: Article[];
  contracts: Contract[];
  recipes: Recipe[];
  producers: Producer[];
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = async () => {
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };
  const staticPages = getStaticPages();
  const newsArticles = (await getArticles()) || [];
  const contracts = getContracts() || [];
  const recipes = (await getRecipes()) || [];
  const producers = (await getProducers()) || [];

  return {
    props: { footerData, staticPages, newsArticles, contracts, recipes, producers },
  };
};

export default PrivacyPolicyPage;
