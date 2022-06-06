import { ArticleCard, H2, HandDrawnArrowDownIcon, Header } from '@core/components';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Article, Contact } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import Image from 'next/image';
import { AmapBenefitCard, AmapValueCard, HowItWorksStepCard } from '@src/pages/home/components';
import Fade from 'react-reveal/Fade';
import { getArticles } from '@src/cms/articles';

const HomePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  articles,
  footerData,
}) => {
  const benefits = [
    {
      title: 'Pour manger mieux',
      content:
        'Les paniers sont composés de produits frais et de saison, ce qui assure une meilleure qualité nutritive. De plus, des produits bios, et donc sans pesticides sont meilleurs pour la santé.',
      imageUrl: '/assets/vegetables-hand-drawn-basket.png',
      imageAlt: "Dessin d'un panier de légumes",
    },
    {
      title: 'Pour les producteurs',
      content:
        'En achetant les produits à l’avance, vous assurez une sécurité financière pour les producteurs, ce qui leur permet de pouvoir gérer les aléas de la production plus sereinement.',
      imageUrl: '/assets/care.png',
      imageAlt: "Dessin d'une main tendue",
    },
    {
      title: "Pour l'environnement",
      content:
        'Les paniers permettent de réduire les emballages, et donc de produire moins de déchets. De plus, en favorisant les circuits court, on limite les émissions de CO2 liées au transport.',
      imageUrl: '/assets/planet-earth.png',
      imageAlt: 'Dessin de la planète Terre',
    },
    {
      title: 'Pour le lien social',
      content:
        'Contrairement aux allées froides et sans âme des supermarchés, la distribution des paniers se fait un cadre chaleureux et convivial, qui permet de renouer le lien entre le producteur et les consommateurs.',
      imageUrl: '/assets/deal.png',
      imageAlt: "Dessin d'une poignée de main",
    },
    {
      title: 'Pour le porte monnaie',
      content:
        'En réduisant les intermédiaires, on peut réduire le coût du panier, tout en ayant un prix juste pour le producteur. C’est pourquoi le rapport qualité/prix des paniers est excellent !',
      imageUrl: '/assets/piggy-bank.png',
      imageAlt: "Dessin d'une tirelire",
    },
  ];

  const howItWorksSteps: {
    title: string;
    content: string;
    color: 'primary' | 'yellow' | 'melon';
  }[] = [
    {
      title: 'Adhésion',
      content:
        "Je signe un contrat qui m'engage à acheter les produits de mon choix pour une période donnée.",
      color: 'primary',
    },
    {
      title: 'Production',
      content:
        "De son côté, le producteur s'engage à assurer la livraison des paniers au prix fixé dans le  contrat.",
      color: 'yellow',
    },
    {
      title: 'Distribution',
      content: 'Chaque semaine, je vais récupérer mon panier sur le lieu de distribution.',
      color: 'melon',
    },
  ];

  const amapValues: {
    title: string;
    items: string[];
    color: 'primary' | 'yellow' | 'melon' | 'green';
  }[] = [
    {
      title: 'Solidarité',
      color: 'melon',
      items: [
        'Soutien des consommateurs aux producteurs dans les aléas de la production',
        "Accompagnement du producteur à l'autonomie, c'est-à-dire la capacité à être maître de ses choix",
        "Appui à l'agriculture paysanne locale",
      ],
    },
    {
      title: 'Équité',
      color: 'primary',
      items: [
        'Définition à chaque saison d’un prix équitable entre consommateurs et producteur',
        'Formalisation et respect des contrats entre consommateurs et producteur',
        'Respect des normes sociales par rapport aux employés de l’exploitation, y compris le personnel temporaire',
        'Aucun intermédiaire entre producteur et consommateurs, pas de produits achetés et revendus par le producteur sans accord des consommateurs',
      ],
    },
    {
      title: 'Qualité',
      color: 'green',
      items: [
        'Qualité des produits : gustative, sanitaire, environnementale',
        "Production respectueuse de la nature, de l'environnement et de l'animal",
        'Information fréquente du consommateur sur les produits',
        "Recherche de la transparence dans les actes d'achat, de production, de transformation et de vente des produits agricoles",
        "Production de dimension humaine adaptée aux types de culture et d'élevage",
      ],
    },
    {
      title: 'Lien social',
      color: 'yellow',
      items: [
        'Proximité du producteur et des consommateurs',
        "Participation active des consommateurs à l'AMAP favorisée notamment par la responsabilisation du maximum d'adhérents",
        "Sensibilisation des adhérents de l'AMAP aux particularités de l'agriculture paysanne",
      ],
    },
  ];

  return (
    <MainLayout
      title="Accueil"
      description="Page d'accueil du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat"
    >
      <Header amapName={footerData.amap.name} />

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

      <section className="px-4 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H2>Les dernières actus</H2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-8 md:gap-x-8">
          {articles.map((article, index) => (
            <Fade key={index}>
              <ArticleCard article={article} />
            </Fade>
          ))}
        </div>
      </section>

      <section id="pourquoi-adherer-a-une-amap" className="px-4 mt-32 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H2>Pourquoi adhérer à une AMAP ?</H2>

        <div className="flex flex-col gap-14 md:flex-row md:flex-wrap justify-center">
          {benefits.map((benefit, index) => (
            <Fade key={index}>
              <AmapBenefitCard
                title={benefit.title}
                content={benefit.content}
                imageUrl={benefit.imageUrl}
                imageAlt={benefit.imageAlt}
              />
            </Fade>
          ))}
        </div>
      </section>

      <section className="px-4 mt-12 py-20 bg-grid bg-repeat bg-[length:20px_20px] border-dashed border-y-4 border-gray-300">
        <H2>Comment ça marche ?</H2>

        <div className="flex flex-col gap-12 md:flex-row justify-center items-center md:items-start">
          {howItWorksSteps.map((step, index) => (
            <Fade key={index}>
              <HowItWorksStepCard
                step={index + 1}
                title={step.title}
                content={step.content}
                color={step.color}
              />
            </Fade>
          ))}
        </div>
      </section>

      <section className="px-4 mt-32 pb-20">
        <H2>Les valeurs des AMAP</H2>

        <div className="flex flex-col gap-12 md:flex-row md:flex-wrap justify-center items-center md:items-start">
          {amapValues.map((value, index) => (
            <Fade key={index}>
              <AmapValueCard title={value.title} items={value.items} color={value.color} />
            </Fade>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  articles: Article[];
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = async () => {
  const articles = await getArticles();
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { footerData, articles: articles.slice(0, 3) },
  };
};

export default HomePage;
