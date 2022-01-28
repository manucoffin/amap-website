import { getFooter } from "lib/footer";
import { getHeader } from "lib/header";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Layout from "../components/layout";
import { Footer, Header } from "lib/netlify-types";

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  header,
  footer,
}) => {
  return (
    <Layout>
      COUCOU
      <h1 className="text-sm">{header.title}</h1>
      <h1>{footer.title}</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  header: Header;
  footer: Footer;
}> = () => {
  const header = getHeader();
  const footer = getFooter();

  return {
    revalidate: 1,
    props: { header, footer },
  };
};

export default HomePage;
