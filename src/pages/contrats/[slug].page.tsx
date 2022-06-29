import * as React from 'react';
import {
  DocumentDownloadIcon,
  ExternalLinkIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Tutor, getContract, Contract } from '@cms';
import { H1, Header } from '@core/components';
import ReactMarkdown from 'react-markdown';
import { getTutors } from '@src/cms/tutors/getTutors';
import { getAddress, getAmap, getContact } from '@src/cms';
import { getSlugs } from '@src/cms/lib/utils';
import { join } from 'path';
import { CONTRACTS_DIR } from '@src/core/constants';

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
      className="pb-20 bg-repeat bg-concrete"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 mx-auto lg:w-2/3 2xl:w-1/2">
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
              className="flex items-center justify-center px-4 py-3 mt-8 text-center border rounded-lg md:w-auto md:text-xl text-primary-500 border-primary-500 hover:border-primary-700 hover:text-primary-700"
            >
              <DocumentDownloadIcon className="w-6 mr-2" />
              <span>Télécharger le contrat</span>
            </a>

            {contract.calendarLink && (
              <a
                href={contract.calendarLink}
                className="flex items-center justify-center px-4 py-3 mt-4 text-center md:w-auto md:text-xl text-primary-500 hover:text-primary-700"
              >
                <span>Calendrier de distribution</span>
                <ExternalLinkIcon className="w-6 ml-2" />
              </a>
            )}
          </div>

          <div className="basis-1/2">
            <h2 className="mb-6 text-2xl text-primary-700">À propos de ce contrat</h2>
            <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>

            {tutors.length ? (
              <>
                <h2 className="mt-6 mb-4 text-2xl text-primary-700">Tuteurs</h2>
                <ul className="flex flex-col gap-4 text-gray-700 list-inside">
                  {tutors.map((tutor, index) => (
                    <li key={index} className="flex items-center">
                      <Image
                        src={tutor.photoUrl}
                        alt={`Photo de profil de ${tutor.firstname} ${tutor.lastname}`}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div className="flex flex-col ml-2">
                        <span className="font-bold">
                          {tutor.firstname} {tutor.lastname}
                        </span>

                        {tutor.phone && (
                          <span className="flex items-center">
                            <PhoneIcon className="w-4 mr-1 shrink-0" /> {tutor.phone}
                          </span>
                        )}

                        {tutor.email && (
                          <span className="flex items-center">
                            <MailIcon className="w-4 mr-1 shrink-0" /> {tutor.email}
                          </span>
                        )}

                        {tutor.address && (
                          <span className="flex items-center ">
                            <LocationMarkerIcon className="w-4 mr-1 shrink-0" /> {tutor.address}{' '}
                            {tutor.postcode} {tutor.city}
                          </span>
                        )}
                      </div>
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
  const dirPath = join(process.cwd(), CONTRACTS_DIR);
  const contractPaths = getSlugs(dirPath);

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
    revalidate: 60,
    props: { footerData, contract, tutors },
  };
};

export default ContractPage;
