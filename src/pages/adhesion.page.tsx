import { H1, Header } from '@core/components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Membership } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import { getMembership } from '@src/cms/pages/getMembership';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const MembershipPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  membershipData,
}) => {
  const { description, documentPath } = membershipData;

  return (
    <MainLayout
      title="Adhésion"
      description="Page d'adhésion de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Vous souhaitez adhérer à l&apos;AMAP ? C&apos;est ici !</H1>

        <div className="flex flex-col items-center text-gray-700 gap-6">
          <Image src="/assets/contract.png" alt="Dessin d'un contrat" width={100} height={100} />

          <div className="mt-8">
            <a
              href={documentPath}
              download
              className="text md:text-xl px-4 py-3 rounded-lg text-primary-500 border border-primary-500 hover:border-primary-700 hover:text-primary-700 disabled:border-gray-300 disabled:text-gray-400"
            >
              Télécharger le contrat d&apos;adhésion
            </a>
          </div>

          <div className="mt-20 text-gray-700">
            <h2 className="text-2xl text-primary-700 mb-6">Comment ça marche ?</h2>
            <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  membershipData: Membership;
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = () => {
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };
  const membershipData = getMembership();

  return {
    props: { footerData, membershipData },
  };
};

export default MembershipPage;
