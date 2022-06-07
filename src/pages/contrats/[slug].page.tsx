import * as React from 'react';
import { DocumentDownloadIcon, ExternalLinkIcon } from '@heroicons/react/outline';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '@core/layouts';
import { getContract, getContractsSlugs, Contract } from '@core/lib/contracts';
import { Address, Amap, Contact, Tutor } from '@cms/models';
import { H1, Header } from '@core/components';
import ReactMarkdown from 'react-markdown';
import { getTutors } from '@src/cms/tutors/getTutors';
import { getAddress, getAmap, getContact } from '@src/cms';

const ContractPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  contract,
  tutors,
}) => {
  const { title, photoUrl, description, documentPath } = contract;
  return (
    <MainLayout
      title={`Contrat ${title}`}
      description={`Page de téléchargement du contrat ${title}`}
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Contrat {title}</H1>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full basis-1/2">
            <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg md:w-full md:h-[300px]">
              <Image
                src={photoUrl}
                objectFit="cover"
                layout="fill"
                alt={`Image du contrat ${title}`}
              />
            </div>

            <a
              href={documentPath}
              download
              className="md:w-auto flex items-center justify-center mt-8 text-center md:text-xl px-4 py-3 rounded-lg text-primary-500 border border-primary-500 hover:border-primary-700 hover:text-primary-700"
            >
              <DocumentDownloadIcon className="w-6 mr-2" />
              <span>Télécharger le contrat</span>
            </a>

            {contract.calendarLink && (
              <a
                href={contract.calendarLink}
                className="md:w-auto flex items-center justify-center mt-4 text-center md:text-xl px-4 py-3 text-primary-500 hover:text-primary-700"
              >
                <span>Calendrier de distribution</span>
                <ExternalLinkIcon className="w-6 ml-2" />
              </a>
            )}
          </div>

          <div className="basis-1/2">
            <h2 className="text-2xl text-primary-700 mb-6">À propos de ce contrat</h2>
            <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>

            {tutors.length ? (
              <>
                <h2 className="text-2xl text-primary-700 mt-6 mb-4">Tuteurs</h2>
                <ul className="text-gray-700 list-inside list-disc">
                  {tutors.map((tutor, index) => (
                    <li key={index}>
                      {tutor.firstname} {tutor.lastname}{' '}
                      {tutor.contact ? `(${tutor.contact})` : null}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contractPaths = getContractsSlugs();

  const paths = contractPaths.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  footerData: { address: Address; amap: Amap; contact: Contact };
  contract: Contract;
  tutors: Tutor[];
}> = async ({ params }) => {
  const slug = params.slug as string | undefined;
  if (!slug) {
    return { notFound: true };
  }

  const contract = getContract(slug);

  if (!contract) {
    return { notFound: true };
  }

  const allTutors = await getTutors();

  const tutors = contract.tutors
    ? allTutors.filter((tutor) => contract.tutors.includes(tutor.id))
    : [];

  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { footerData, contract, tutors },
  };
};

export default ContractPage;
