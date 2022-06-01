import { HandDrawnArrowDownIcon, Header } from '@core/components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { getFooter } from '@core/lib/footer';
import { Footer } from '@cms/models';
import Image from 'next/image';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ footerData }) => {
  return (
    <MainLayout
      title="Accueil"
      description="Page d'accueil du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat"
    >
      <Header />

      <div className="hidden lg:flex h-screen-no-header absolute top-[88px] left-0 right-0 bottom-0 overflow-hidden">
        <Image
          src="/assets/home-bg.png"
          alt="Image avec des fruits et légumes"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="lg:hidden h-screen-no-header absolute top-[88px] left-0 right-0 bottom-0 overflow-hidden">
        <Image
          src="/assets/home_bg_1024.png"
          alt="Image avec des fruits et légumes"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="relative w-screen h-screen flex flex-col items-center justify-center z-10">
        <h1 className="font-handwritten text-5xl md:text-7xl text-primary-800 text-center">
          Des paniers <b>bio</b> <br /> pour soutenir <br /> les <b>producteurs locaux</b>
        </h1>

        <a
          href="#pourquoi-adherer-a-une-amap"
          className="group flex flex-col items-center font-handwritten text-gray-600 text-3xl mt-20 hover:text-primary-600 transition"
        >
          <span>Découvrir l&apos;AMAP</span>
          <HandDrawnArrowDownIcon className="w-5 mt-4 fill-gray-600 group-hover:fill-primary-600 transition" />
        </a>
      </div>

      <div id="pourquoi-adherer-a-une-amap">
        <h2>Pourquoi adhérer à une AMAP ?</h2>
      </div>
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
