import * as React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { PlasmicContract } from 'src/core/components/plasmic/amap_website/PlasmicContract';
import { MainLayout } from 'src/core/layouts';
import { getContract, getContractsSlugs, Contract } from 'src/core/lib/contracts';
import { getFooter } from 'src/core/lib/footer';
import { Footer } from 'src/core/lib/netlify-types';

const ContractPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  contractData,
}) => {
  return (
    <MainLayout
      title={`Contrat ${contractData?.title}`}
      description={`Page de téléchargement du contrat ${contractData?.title}`}
      footerData={footerData}
    >
      <PlasmicContract
        title={`Contrat ${contractData?.title}`}
        image={{
          render: () => (
            <div className="mb-10">
              <Image
                src={contractData?.imagePath}
                alt={`Photo de ${contractData?.title}`}
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          ),
        }}
        downloadButton={{
          render: () => (
            <a href={contractData?.documentPath} download className="mb-[96px]">
              <span className="font-medium text-xl text-center border border-gray-500 hover:border-blue-500  flex font-serif transition py-2 px-3 rounded hover:text-blue-500">
                <DownloadIcon className="w-6 h-6" /> Télécharger le contrat
              </span>
            </a>
          ),
        }}
        description={contractData?.description}
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
