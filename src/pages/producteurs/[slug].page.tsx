import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Contract, Producer } from '@cms/models';
import { ButtonLink, H1, Header } from '@core/components';
import { getAddress, getAmap, getContact, getContract, getProducer } from '@src/cms';
import { Routes } from '@core/constants';
import ReactMarkdown from 'react-markdown';
import { AtSymbolIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';

const ProducerPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  footerData,
  producer,
  contracts,
}) => {
  const {
    firstname,
    lastname,
    photoUrl,
    biography,
    activity,
    address,
    city,
    postcode,
    phone,
    email,
  } = producer;

  return (
    <MainLayout
      title={`${firstname} ${lastname}`}
      description={`${firstname} ${lastname} - ${activity}`}
      footerData={footerData}
      className="pb-20 bg-repeat bg-concrete"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 mx-auto lg:w-2/3 2xl:w-1/2">
        <H1>
          {firstname} {lastname} - {activity}
        </H1>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full basis-1/2">
            <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg md:w-full md:h-[300px]">
              <Image
                src={photoUrl}
                fill
                className="object-cover"
                alt={`Photo de profil de ${firstname} ${lastname}`}
              />
            </div>

            <div className="flex flex-col gap-2 text-gray-700">
              <h2 className="mt-4 mb-2 text-2xl text-primary-700">Contact</h2>
              <p className="flex">
                <AtSymbolIcon className="w-5 mr-2" />
                <span>{email}</span>
              </p>
              <p className="flex">
                <PhoneIcon className="w-5 mr-2" />
                <span>{phone}</span>
              </p>

              {address ? (
                <div className="flex items-start">
                  <LocationMarkerIcon className="w-5 mr-2" />
                  <p>
                    {address} <br />
                    {postcode} {city}
                  </p>
                </div>
              ) : null}

              {contracts.length ? (
                <>
                  <h2 className="mt-8 mb-4 text-2xl text-primary-700">Contrats</h2>
                  <ul className="text-gray-700 list-disc list-inside">
                    {contracts.map((contract, index) => (
                      <li key={index}>
                        <ButtonLink
                          href={Routes.ContractPage({ contractId: contract.slug })}
                          size="base"
                        >
                          {contract.title}
                        </ButtonLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>

          <div className="basis-1/2">
            <h2 className="mb-6 text-2xl text-primary-700">À propos</h2>
            <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
              <ReactMarkdown>{biography}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  footerData: { address: Address; amap: Amap; contact: Contact };
  producer: Producer;
  contracts: Contract[];
}> = async ({ params }) => {
  const slug = params.slug as string | undefined;

  if (!slug) {
    return { notFound: true };
  }

  const producer = await getProducer(slug);
  const contracts = producer.contracts.map((contractSlug) => getContract(contractSlug));

  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { footerData, producer, contracts },
  };
};

export default ProducerPage;
