import * as React from 'react';
import { useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import ContractCard from 'components/ContractCard';
import { MainLayout } from 'layouts';
import { Contract, getAllContracts } from 'lib/contracts';
import { getFooter } from 'lib/footer';
import { Footer } from 'lib/netlify-types';
import { PlasmicContracts } from '../components/plasmic/amap_website/PlasmicContracts';

const ContractsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  contracts,
  footerData,
}) => {
  function filterContracts(contract: Contract) {
    return contract.title.toLowerCase().includes(filter.toLowerCase());
  }

  const [filter, setFilter] = useState('');

  return (
    <MainLayout
      title="Contrats"
      description="Liste des contrats de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
    >
      <PlasmicContracts
        searchInput={{ onChange: (e) => setFilter(e.target.value) }}
        contracts={contracts.filter(filterContracts).map((contract) => (
          <ContractCard
            key={contract.slug}
            imageUrl={contract.imagePath}
            title={contract.title}
            slug={contract.slug}
          />
        ))}
      />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  contracts: Contract[];
  footerData: Footer;
}> = () => {
  const contracts = getAllContracts();
  const footerData = getFooter();

  return {
    revalidate: 1,
    props: { contracts, footerData },
  };
};

export default ContractsPage;
