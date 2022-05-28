import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from 'src/core/layouts';
import { Article, getArticle, getArticlesSlugs } from 'src/core/lib/articles';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from 'src/core/lib/netlify-types';
import { PlasmicNewsArticle } from '../../core/components/plasmic/amap_website/PlasmicNewsArticle';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  articleData,
}) => {
  return (
    <MainLayout
      title={articleData?.title}
      description="Article d'actualité de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
    >
      <PlasmicNewsArticle
        title={articleData?.title}
        publicationDate={`Publié le ${articleData?.date}`}
        cover={{
          render: (props, Component) => (
            <Component {...props}>
              <Image
                src={articleData?.thumbnail}
                alt={`Photo de ${articleData?.title}`}
                layout="fill"
                objectFit="cover"
                quality={60}
              />
            </Component>
          ),
        }}
        content={{
          render: (props, Component) => (
            <Component
              {...props}
              className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif"
            >
              <ReactMarkdown>{articleData?.content}</ReactMarkdown>
            </Component>
          ),
        }}
      />
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
