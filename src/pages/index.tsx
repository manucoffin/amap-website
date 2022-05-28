import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PlasmicHomepage } from 'src/core/components/plasmic/amap_website/PlasmicHomepage';
import { MainLayout } from 'src/core/layouts';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from 'src/core/lib/netlify-types';

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
