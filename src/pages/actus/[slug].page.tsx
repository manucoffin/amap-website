import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from 'src/core/layouts';
import { Address, Amap, Contact, Article } from '@cms/models';
import { getAddress, getAmap, getContact } from '@cms';
import { getArticle } from '@cms/articles';
import { H1, Header } from '@core/components';
import { getSlugs } from '@src/cms/lib/utils';
import { ARTICLES_DIR } from '@src/core/constants';
import { join } from 'path';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  articleData,
}) => {
  const { title, content, date, photoUrl } = articleData;

  return (
    <MainLayout
      title={title}
      description="Article d'actualité de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-1/2 2xl:w-1/2 mx-auto">
        <H1>{title}</H1>

        <p className="text-gray-400 mb-4">Publié le {date}</p>

        <div className="h-[200px] md:h-[400px] relative overflow-hidden my-6">
          <Image src={photoUrl} objectFit="cover" layout="fill" alt={title} />
        </div>

        <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dirPath = join(process.cwd(), ARTICLES_DIR);
  const articlesPaths = getSlugs(dirPath);

  const paths = articlesPaths.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  footerData: { address: Address; amap: Amap; contact: Contact };
  articleData: Article;
}> = async ({ params }) => {
  const slug = params.slug as string | undefined;
  if (!slug) {
    return { notFound: true };
  }

  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };
  const articleData = await getArticle(slug);

  return {
    revalidate: 600,
    props: { footerData, articleData },
  };
};

export default ArticlePage;
