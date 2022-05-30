import { Header } from '@core/components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { getFooter } from '@core/lib/footer';
import { Footer } from '@core/lib/netlify-types';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ footerData }) => {
  return (
    <MainLayout
      title="Accueil"
      description="Page d'accueil du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat"
    >
      <Header />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
}> = () => {
  const footerData = getFooter();

  return {
    props: { footerData },
  };
};

export default HomePage;
