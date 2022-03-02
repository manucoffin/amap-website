import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PlasmicHomepage } from 'components/plasmic/amap_website/PlasmicHomepage';
import { MainLayout } from 'layouts';
import { getFooter } from 'lib/footer';
import { Footer } from 'lib/netlify-types';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ footerData }) => {
  return (
    <MainLayout
      title="Accueil"
      description="Page d'accueil du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
    >
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
