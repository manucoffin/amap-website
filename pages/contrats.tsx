import ContractCard from "components/ContractCard";
import { MainLayout } from "layouts";
import { Contract, getAllContracts } from "lib/contracts";
import { getFooter } from "lib/footer";
import { Footer } from "lib/netlify-types";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import * as React from "react";
import { useState } from "react";
import { PlasmicContracts } from "../components/plasmic/amap_website/PlasmicContracts";

const ContractsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ contracts, footerData }) => {
  function filterContracts(contract: Contract) {
    return contract.title.toLowerCase().includes(filter.toLowerCase());
  }

  const [filter, setFilter] = useState("");

  return (
    <MainLayout footerData={footerData}>
      <PlasmicContracts
        searchInput={{ onChange: (e) => setFilter(e.target.value) }}
        contracts={contracts.filter(filterContracts).map((contract) => (
          <ContractCard
            key={contract.id}
            documentUrl={contract.document_path}
            imageUrl={contract.image_path}
            title={contract.title}
            description={contract.description}
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
