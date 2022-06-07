import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'src/core/layouts';
import { Address, Amap, Contact } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import { getPrivacyPolicy } from '@src/cms/pages/getPrivacyPolicy';
import { Header } from '@src/core/components';

const PrivacyPolicyPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  privacyPolicy,
}) => {
  return (
    <MainLayout
      title="Politique de confidentialité"
      description="Politique de confidentialité du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      footerVariant="minimal"
      className="bg-concrete bg-repeat"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <h1 className="text-center font-heading font-bold text-2xl md:text-3xl mb-10 text-gray-700">
          Politique de confidentialité
        </h1>

        <div className="prose prose-stone prose-h3:my-0 prose-p:my-0 prose-li:my-0 prose-ul:leading-5 max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-blue-700 prose-p:font-serif prose-li:font-serif">
          <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  privacyPolicy: string;
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = () => {
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };
  const privacyPolicy = getPrivacyPolicy();

  return {
    props: { footerData, privacyPolicy },
  };
};

export default PrivacyPolicyPage;
