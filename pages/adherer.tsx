import { DocumentDownloadIcon } from "@heroicons/react/outline";
import { MainLayout } from "layouts";
import { getFooter } from "lib/footer";
import { Footer } from "lib/netlify-types";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import * as React from "react";
import { ScreenVariantProvider } from "../components/plasmic/amap_website/PlasmicGlobalVariant__Screen";
import { PlasmicMembership } from "../components/plasmic/amap_website/PlasmicMembership";

const MembershipPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ footerData }) => {
  return (
    <MainLayout footerData={footerData}>
      <PlasmicMembership
        downloadButton={{
          render: (props, Component) => (
            <a href={"documentUrl"} download className="mb-[96px]">
              <span className="text-3xl text-center flex font-sans text-white bg-blue-500 hover:bg-blue-300 transition py-3 px-4 rounded-xl  border-black border-2">
                Télécharger le contrat d&apos;adhésion
              </span>
            </a>
          ),
        }}
        description={"OK"}
      />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
}> = () => {
  const footerData = getFooter();

  return {
    revalidate: 1,
    props: { footerData },
  };
};

export default MembershipPage;
