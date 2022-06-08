import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from 'src/core/layouts';
import { Address, Amap, Contact, Article, getAddress, getAmap, getContact, getArticle } from '@cms';
import { H1, Header } from '@core/components';
import { getSlugs } from '@src/cms/lib/utils';
import { ARTICLES_DIR } from '@src/core/constants';
import { join } from 'path';
import { ArticleJsonLd } from 'next-seo';
import { Seo } from '@src/core/components/Seo';
import { useRouter } from 'next/router';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  articleData,
}) => {
  const router = useRouter();
  const { title, content, date, photoUrl, author, abstract } = articleData;

  return (
    <>
      <Seo
        title={title}
        description={abstract}
        openGraph={{
          title: title,
          description: abstract,
          url: `https://www.amap-goutte-eau.fr${router.asPath}`,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: date,
            authors: [author],
          },
          images: [
            {
              url: `https://www.amap-goutte-eau.fr/uploads/images/${photoUrl}`,
              width: 850,
              height: 650,
              alt: `Photo de l'article : ${title}`,
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={`https://www.amap-goutte-eau.fr${router.asPath}`}
        title={title}
        images={[`https://www.amap-goutte-eau.fr/uploads/images/${photoUrl}`]}
        datePublished={date}
        dateModified={date}
        authorName={[author]}
        publisherLogo={`https://www.amap-goutte-eau.fr/logo_h.png`}
        description={abstract}
      />

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
    </>
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
    fallback: false,
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

  if (!articleData) {
    return { notFound: true };
  }

  return {
    revalidate: 600,
    props: { footerData, articleData },
  };
};

export default ArticlePage;
