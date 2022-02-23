import { PlasmicContract } from "components/plasmic/amap_website/PlasmicContract";
import { MainLayout } from "layouts";
import { getContract, getContractsSlugs, Contract } from "lib/contracts";
import { getFooter } from "lib/footer";
import { Footer } from "lib/netlify-types";
import Image from "next/image";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import * as React from "react";
import clsx from "clsx";

const ContractPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ footerData, contractData }) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicContract
        title={contractData.title}
        image={{
          render: (props, Component) => (
            <div className="mb-10">
              <Image
                src={contractData.imagePath}
                alt={`Photo de ${contractData.title}`}
                width={250}
                height={250}
                className="mb-10 rounded-full"
              />
            </div>
          ),
        }}
        downloadButton={{
          render: (props, Component) => (
            <a href={contractData.documentPath} download className="mb-[96px]">
              <span className="text-3xl text-center flex font-sans text-white bg-blue-500 hover:bg-blue-300 transition py-3 px-4 rounded-xl  border-black border-2">
                Télécharger le contrat
              </span>
            </a>
          ),
        }}
        description={contractData.description}
      />
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
  contractData: Contract;
}> = async ({ params }) => {
  const slug = params.slug as string | undefined;
  if (!slug) {
    return { notFound: true };
  }

  const footerData = getFooter();
  const contractData = getContract(slug);

  return {
    revalidate: 1,
    props: { footerData, contractData },
  };
};

export default ContractPage;
