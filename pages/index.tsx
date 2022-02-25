import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PlasmicHomepage } from 'components/plasmic/amap_website/PlasmicHomepage';
import { MainLayout } from 'layouts';
import { getFooter } from 'lib/footer';
import { Footer } from 'lib/netlify-types';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ footerData }) => {
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
