import * as React from "react";
import { PlasmicNews } from "../components/plasmic/amap_website/PlasmicNews";
import { MainLayout } from "layouts";
import { getFooter } from "lib/footer";
import { Footer } from "lib/netlify-types";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Article, getAllArticles } from "lib/articles";
import Link from "next/link";

const NewsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
  footerData,
}) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicNews
        articles={articles.map((article) => (
          <Link href={`/actus/${article.slug}`} passHref>
            <a>{article.title}</a>
          </Link>
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
