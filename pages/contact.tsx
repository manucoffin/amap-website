import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'layouts';
import { getFooter } from 'lib/footer';
import { Footer } from 'lib/netlify-types';
import { PlasmicContact } from '../components/plasmic/amap_website/PlasmicContact';

const ContactPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ footerData }) => {
  return (
    <MainLayout
      title="Contact"
      description="Page de contact de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      minimalFooter
    >
      <PlasmicContact
        email={{
          render: (props) => (
            <a href={`mailto:${footerData.email}`} className={props.className}>
              {footerData.email}
            </a>
          ),
        }}
        phone={{
          render: (props) => (
            <a href={`tel:${footerData.phone}`} className={props.className}>
              {footerData.phone}
            </a>
          ),
        }}
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
