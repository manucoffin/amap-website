import { getFooter } from "lib/footer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Footer } from "lib/netlify-types";
import { PlasmicHomepage } from "components/plasmic/amap_website/PlasmicHomepage";

import { MainLayout } from "layouts";

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
}) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicHomepage />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
}> = () => {
  const footerData = getFooter();

  return {
    revalidate: 1,
    props: { footerData },
  };
};

export default HomePage;
