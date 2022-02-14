import { PlasmicContact } from "../components/plasmic/amap_website/PlasmicContact";
import { getFooter } from "lib/footer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Footer } from "lib/netlify-types";
import { MainLayout } from "layouts";

const ContactPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
}) => {
  return (
    <MainLayout footerData={footerData} minimalFooter>
      <PlasmicContact
        email={footerData.email}
        address={footerData.address}
        postCode={footerData.postcode}
        city={footerData.city}
        schedule={footerData.schedule}
      ></PlasmicContact>
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

export default ContactPage;
