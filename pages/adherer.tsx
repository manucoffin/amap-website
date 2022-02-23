import { DocumentDownloadIcon, DownloadIcon } from "@heroicons/react/outline";
import { MainLayout } from "layouts";
import { getFooter } from "lib/footer";
import { getMembershipData } from "lib/membership";
import { Footer, Membership } from "lib/netlify-types";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { PlasmicMembership } from "../components/plasmic/amap_website/PlasmicMembership";

const MembershipPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ footerData, membershipData }) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicMembership
        downloadButton={{
          render: (props, Component) => (
            <a
              href={membershipData.documentPath}
              download
              className="mb-[96px]"
            >
              <span className="text-3xl text-center flex items-center font-sans transition rounded-xl underline-offset-4 hover:text-blue-500 hover:underline">
                <DownloadIcon className="w-8 h-8" /> Télécharger le contrat
                d&apos;adhésion
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
