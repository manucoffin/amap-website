import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from '@core/layouts';
import { getContracts } from '@cms/contracts';
import { Address, Amap, Contact, Contract } from '@cms/models';
import { getAddress, getAmap, getContact } from '@src/cms';
import { H1, Header } from '@core/components';
import autoAnimate from '@formkit/auto-animate';
import { ContractCard } from '@src/pages/contrats/components';
import { SearchIcon } from '@heroicons/react/outline';
import Fade from 'react-reveal/Fade';

const ContractsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  contracts,
  footerData,
}) => {
  function filterContracts(contract: Contract) {
    return contract.title.toLowerCase().includes(filter.toLowerCase());
  }

  const [filter, setFilter] = useState('');
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <MainLayout
      title="Contrats"
      description="Liste des contrats de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header amapName={footerData.amap.name} />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Vous cherchez un contrat ? c&apos;est par là</H1>

        <div className="relative max-w-[300px] h-10 mx-auto mb-10">
          <input
            className="transition h-full rounded-full appearance-none border border-gray-300 w-full pl-5 pr-9 bg-white text-gray-700 placeholder-gray-400 focus:shadow-xl text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            type="text"
            placeholder="Rechercher un contrat"
            onChange={(e) => setFilter(e.target.value)}
          />
          <SearchIcon className="text-gray-400 w-6 h-6 absolute right-3 top-2" />
        </div>

        <div
          className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-8"
          ref={parent}
        >
          {contracts.filter(filterContracts).map((contract, index) => (
            <Fade key={index}>
              <ContractCard contract={contract} />
            </Fade>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  contracts: Contract[];
  footerData: { address: Address; amap: Amap; contact: Contact };
}> = () => {
  const contracts = getContracts();
  const footerData = {
    address: getAddress(),
    amap: getAmap(),
    contact: getContact(),
  };

  return {
    props: { contracts, footerData },
  };
};

export default ContractsPage;
