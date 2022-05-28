import * as React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import ArticleCard from 'src/core/components/ArticleCard';
import { MainLayout } from 'src/core/layouts';
import { Article, getAllArticles } from 'src/core/lib/articles';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from 'src/core/lib/netlify-types';
import { truncateText } from 'src/core/lib/utils';
import { PlasmicNews } from '../core/components/plasmic/amap_website/PlasmicNews';

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
    >
      <PlasmicNews
        key={'plasmicNews'}
        leadArticle={
          <ArticleCard
            horizontal
            title={truncateText(mainArticle.title, 60)}
            date={`Publié le ${mainArticle.date}`}
            abstract={truncateText(mainArticle.content, 100)}
            thumbnailUrl={mainArticle.thumbnail}
            slug={mainArticle.slug}
          />
        }
        articles={previousArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={truncateText(article.title, 50)}
            date={`Publié le ${article.date}`}
            abstract={truncateText(article.content, 80)}
            thumbnailUrl={article.thumbnail}
            slug={article.slug}
          />
        ))}
      />
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
