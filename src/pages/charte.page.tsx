import { H1, Header } from '@core/components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import ReactMarkdown from 'react-markdown';
import { getConvention } from '@src/cms/pages/getConvention';

const ConventionPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  convention,
}) => {
  return (
    <MainLayout
      title="Charte des AMAP"
      description="La charte des AMAP reprend l'ensemble des règles que chaque AMAP s'engage à respecter."
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Charte des AMAP</H1>

        <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
          <ReactMarkdown>{convention}</ReactMarkdown>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  convention: string;
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = () => {
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };
  const convention = getConvention();

  return {
    props: { footerData, convention },
  };
};

export default ConventionPage;
