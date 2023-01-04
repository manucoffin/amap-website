import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Article } from '@cms/models';
import { getAddress, getAmap, getContact } from '@cms';
import { ButtonLink, H1, Header, ArticleCard } from '@core/components';
import Image from 'next/image';
import clsx from 'clsx';
import { truncateText } from '@core/lib/utils';
import { Routes } from '@core/constants/routes';
import { getArticles } from '@cms/articles';
import { getLocaleDate } from '@core/lib';

const NewsPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  articles,
  footerData,
}) => {
  const mainArticle = articles[0];
  const previousArticles = articles.slice(1);

  return (
    <MainLayout
      title="Actualités"
      description="Page d'actualités de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="pb-20 bg-repeat bg-concrete"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 mx-auto lg:w-2/3 2xl:w-1/2">
        <H1>Actualités</H1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-8 md:gap-x-8">
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-5 md:gap-4 md:h-[300px]">
              <div className="shadow-lg h-[200px] md:h-full md:col-span-2 relative rounded-lg overflow-hidden">
                <Image
                  src={mainArticle.photoUrl}
                  fill
                  className="object-cover"
                  alt={mainArticle.title}
                />
              </div>

              <div className={clsx('col-span-3 flex flex-col text-gray-700 justify-between')}>
                <div>
                  <h5 className="text-xl font-bold md:text-4xl">
                    {truncateText(mainArticle.title, 60)}
                  </h5>
                  <p className="mb-4 text-sm text-gray-400">
                    Publié le {getLocaleDate(new Date(mainArticle.date))}
                  </p>
                  <p>{truncateText(mainArticle.content, 100)}</p>
                </div>

                <div className="flex justify-end w-full mt-4">
                  <ButtonLink
                    href={Routes.ArticlePage({ slug: mainArticle.slug })}
                    decoration="underline"
                    size="base"
                  >
                    Lire la suite
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          {previousArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  articles: Article[];
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = async () => {
  const articles = await getArticles();
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { articles, footerData },
  };
};

export default NewsPage;
