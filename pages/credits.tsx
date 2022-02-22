import { PlasmicContact } from "../components/plasmic/amap_website/PlasmicContact";
import { getFooter } from "lib/footer";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Footer } from "lib/netlify-types";
import { MainLayout } from "layouts";

const CreditsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
}) => {
  return (
    <MainLayout footerData={footerData} minimalFooter>
      {/* HOME ILLUSTRATIONS */}
      <a href="https://www.freepik.com/vectors/frame">
        Frame vector created by pikisuperstar - www.freepik.com
      </a>

      <a href="https://www.freepik.com/photos/pattern">
        Pattern photo created by tirachard - www.freepik.com
      </a>

      <a href="https://www.flaticon.com/free-icons/basket" title="basket icons">
        Basket icons created by Freepik - Flaticon
      </a>

      <a href="https://www.flaticon.com/free-icons/love" title="love icons">
        Love icons created by smashingstocks - Flaticon
      </a>

      <a href="https://www.flaticon.com/free-icons/money" title="money icons">
        Money icons created by smashingstocks - Flaticon
      </a>

      <a
        href="https://www.flaticon.com/free-icons/planet-earth"
        title="planet earth icons"
      >
        Planet earth icons created by Freepik - Flaticon
      </a>

      <a
        href="https://www.flaticon.com/free-icons/shake-hands"
        title="shake hands icons"
      >
        Shake hands icons created by smashingstocks - Flaticon
      </a>

      {/* Contact */}
      <a
        href="https://www.flaticon.com/free-icons/paper-plane"
        title="paper plane icons"
      >
        Paper plane icons created by Freepik - Flaticon
      </a>

      <a
        href="https://www.flaticon.com/free-icons/contact-us"
        title="contact us icons"
      >
        Contact us icons created by smashingstocks - Flaticon
      </a>

      <a href="https://www.flaticon.com/free-icons/map" title="map icons">
        Map icons created by smashingstocks - Flaticon
      </a>
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

export default CreditsPage;
