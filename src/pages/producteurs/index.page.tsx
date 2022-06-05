import * as React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { Address, Amap, Contact, Producer } from '@cms/models';
import { getAddress, getAmap, getContact, getProducers } from '@src/cms';
import { H1, Header } from '@core/components';
import { ProducerCard } from '@src/pages/producteurs/components';

const ProducersPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  producers,
  footerData,
}) => {
  return (
    <MainLayout
      title="Contrats"
      description="Liste des contrats de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Nos Producteurs</H1>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {producers.map((producer, index) => (
            <ProducerCard key={index} producer={producer} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  producers: Producer[];
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = async () => {
  const producers = await getProducers();
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { producers, footerData },
  };
};

export default ProducersPage;
