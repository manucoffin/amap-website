import ContractCard from "components/ContractCard";
import { Contract, getAllContracts } from "lib/contracts";
import { Contrats } from "lib/netlify-types";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import * as React from "react";
import { PlasmicContracts } from "../components/plasmic/amap_website/PlasmicContracts";

const ContractsPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ contracts }) => {
  return (
    <PlasmicContracts
      contracts={contracts.map((contract) => (
        <ContractCard
          key={contract.title}
          documentUrl={contract.document_path}
          imageUrl={contract.image_path}
          title={contract.title}
          description={contract.description}
        />
      ))}
    />
  );
};

export const getStaticProps: GetStaticProps<{
  contracts: Contract[];
}> = () => {
  const contracts = getAllContracts();

  return {
    revalidate: 1,
    props: { contracts },
  };
};

export default ContractsPage;
