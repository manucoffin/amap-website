import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { ArticleCard } from '@src/pages/actus/components';
import { MainLayout } from 'src/core/layouts';
import { Article, getAllArticles } from 'src/core/lib/articles';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from 'src/core/lib/netlify-types';
import { ButtonLink, H1, Header } from '@src/core/components';
import Image from 'next/image';
import clsx from 'clsx';
import { truncateText } from '@src/core/lib/utils';
import { Routes } from '@src/core/constants/routes';

const NewsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
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
      className="bg-concrete bg-repeat pb-20"
    >
      <Header />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Actualités</H1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-8 md:gap-x-8">
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-5 md:gap-4 md:h-[300px]">
              <div className="shadow-lg h-[200px] md:h-full md:col-span-2 relative rounded-lg overflow-hidden">
                <Image
                  src={mainArticle.thumbnail}
                  objectFit="cover"
                  layout="fill"
                  alt={mainArticle.title}
                />
              </div>

              <div className={clsx('col-span-3 flex flex-col text-gray-700 justify-between')}>
                <div>
                  <h5 className="text-xl md:text-4xl font-bold">
                    {truncateText(mainArticle.title, 60)}
                  </h5>
                  <p className="text-sm text-gray-400 mb-4">Publié le {mainArticle.date}</p>
                  <p>{truncateText(mainArticle.content, 100)}</p>
                </div>

                <div className="flex w-full justify-end mt-4">
                  <ButtonLink
                    href={Routes.ArticlePage({ articleId: mainArticle.slug })}
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

export const getStaticProps: GetStaticProps<{
  articles: Article[];
  footerData: Footer;
}> = async () => {
  const articles = await getAllArticles();
  const footerData = getFooter();

  return {
    revalidate: 1,
    props: { articles, footerData },
  };
};

export default NewsPage;
