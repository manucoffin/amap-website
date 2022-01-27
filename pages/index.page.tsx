import { FooterData, getFooter } from "lib/footer";
import { getHeader, HeaderData } from "lib/header";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Layout from "../components/layout";

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  header,
  footer,
}) => {
  return (
    <Layout>
      <h1 className="text-sm">{header.title}</h1>
      <h1>{footer.title}</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  header: HeaderData;
  footer: FooterData;
}> = () => {
  const header = getHeader();
  const footer = getFooter();

  return {
    revalidate: 1,
    props: { header, footer },
  };
};

export default HomePage;
