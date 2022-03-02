import { DownloadIcon } from '@heroicons/react/outline';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'layouts';
import { getFooter } from 'lib/footer';
import { getMembershipData } from 'lib/membership';
import { Footer, Membership } from 'lib/netlify-types';
import { PlasmicMembership } from '../components/plasmic/amap_website/PlasmicMembership';

const MembershipPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  membershipData,
}) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicMembership
        key={'PlasmicMembership'}
        downloadButton={{
          render: () => (
            <a href={membershipData.documentPath} download className="mb-[96px]">
              <span className="font-medium text-xl text-center border border-gray-500 hover:border-blue-500  flex font-serif transition py-2 px-3 rounded hover:text-blue-500">
                <DownloadIcon className="w-6 h-6" /> Télécharger le contrat d&apos;adhésion
              </span>
            </a>
          ),
        }}
        description={membershipData.description}
      />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
  membershipData: Membership;
}> = () => {
  const footerData = getFooter();
  const membershipData = getMembershipData();

  return {
    revalidate: 1,
    props: { footerData, membershipData },
  };
};

export default MembershipPage;
