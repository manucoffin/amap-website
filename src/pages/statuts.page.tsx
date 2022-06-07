import { H1, Header } from '@core/components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import ReactMarkdown from 'react-markdown';
import { getStatutes } from '@src/cms/pages/getStatutes';

const StatutesPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  statutes,
}) => {
  return (
    <MainLayout
      title="Statuts de l'association"
      description={`Statuts de l'Association "Association pour le Maintien d'une Agriculture Paysanne de la Goutte d'Eau"`}
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Statuts de l&apos;association</H1>

        <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
          <ReactMarkdown>{statutes}</ReactMarkdown>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  statutes: string;
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = () => {
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };
  const statutes = getStatutes();

  return {
    props: { footerData, statutes },
  };
};

export default StatutesPage;
