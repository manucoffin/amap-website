import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from 'src/core/layouts';
import { Article, getArticle, getArticlesSlugs } from 'src/core/lib/articles';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from 'src/core/lib/netlify-types';
import { H1, Header } from '@core/components';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  articleData,
}) => {
  const { title, content, date, thumbnail } = articleData;

  return (
    <MainLayout
      title={title}
      description="Article d'actualité de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header />

      <div className="px-4 py-12 lg:w-1/2 2xl:w-1/2 mx-auto">
        <H1>{title}</H1>

        <p className="text-gray-400 mb-4">Publié le {date}</p>

        <div className="h-[200px] md:h-[400px] relative overflow-hidden my-6">
          <Image src={thumbnail} objectFit="cover" layout="fill" alt={title} />
        </div>

        <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesPaths = getArticlesSlugs();

  const paths = articlesPaths.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
  articleData: Article;
}> = async ({ params }) => {
  const slug = params.slug as string | undefined;
  if (!slug) {
    return { notFound: true };
  }

  const footerData = getFooter();
  const articleData = await getArticle(slug);

  return {
    revalidate: 1,
    props: { footerData, articleData },
  };
};

export default ArticlePage;
