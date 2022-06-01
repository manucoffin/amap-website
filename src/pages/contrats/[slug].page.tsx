import * as React from 'react';
import { DocumentDownloadIcon } from '@heroicons/react/outline';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { MainLayout } from '@core/layouts';
import { getContract, getContractsSlugs, Contract } from '@core/lib/contracts';
import { getFooter } from '@core/lib/footer';
import { Footer } from '@core/lib/netlify-types';
import { H1, Header } from '@core/components';
import ReactMarkdown from 'react-markdown';

const ContractPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  contractData,
}) => {
  const { title, imagePath, description, documentPath } = contractData;
  return (
    <MainLayout
      title={`Contrat ${contractData?.title}`}
      description={`Page de téléchargement du contrat ${contractData?.title}`}
      footerData={footerData}
      className="bg-concrete bg-repeat pb-20"
    >
      <Header />

      <div className="px-4 py-12 lg:w-2/3 2xl:w-1/2 mx-auto">
        <H1>Contrat {title}</H1>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="h-[200px] relative rounded-lg overflow-hidden shadow-lg md:w-full md:h-[300px]">
            <Image
              src={imagePath}
              objectFit="cover"
              layout="fill"
              alt={`Image du contrat ${title}`}
            />
          </div>

          <div>
            <h2 className="text-2xl text-primary-700 mb-6">À propos de ce contrat</h2>
            <div className="prose prose-stone max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-blue-700 prose-p:font-serif prose-blockquote:font-serif">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>

            <a
              href={documentPath}
              download
              className="md:w-auto flex items-center justify-center mt-8 text-center md:text-xl px-4 py-3 rounded-lg text-primary-500 border border-primary-500 hover:border-primary-700 hover:text-primary-700 disabled:border-gray-300 disabled:text-gray-400"
            >
              <DocumentDownloadIcon className="w-6 mr-2" />
              <span>Télécharger le contrat</span>
            </a>
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
