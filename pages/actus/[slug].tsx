import { MainLayout } from "layouts";
import { getFooter } from "lib/footer";
import { Footer } from "lib/netlify-types";
import Image from "next/image";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import * as React from "react";
import { DownloadIcon } from "@heroicons/react/outline";
import { PlasmicNewsArticle } from "../../components/plasmic/amap_website/PlasmicNewsArticle";
import { Article, getArticle, getArticlesSlugs } from "lib/articles";

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  articleData,
}) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicNewsArticle
        title={articleData.title}
        publicationDate={articleData.date}
        cover={articleData.thumbnail}
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
  const articleData = getArticle(slug);

  return {
    revalidate: 1,
    props: { footerData, articleData },
  };
};

export default ArticlePage;
