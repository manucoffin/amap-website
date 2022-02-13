import { getFooter } from "lib/footer";
import { getHeader } from "lib/header";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Footer, Header } from "lib/netlify-types";
import { PlasmicHomepage } from "components/plasmic/amap_website/PlasmicHomepage";
import Image from "next/image";

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  header,
  footer,
}) => {
  return (
    <PlasmicHomepage />
    // <Layout>
    //   COUCOU
    //   <h1 className="text-sm">{header.title}</h1>
    //   <h1>{footer.title}</h1>
    // </Layout>
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
