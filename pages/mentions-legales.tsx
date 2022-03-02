import ReactMarkdown from 'react-markdown';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'layouts';
import { getFooter } from 'lib/footer';
import { getLegalText } from 'lib/legal';
import { Footer } from 'lib/netlify-types';
import { PlasmicLegal } from '../components/plasmic/amap_website/PlasmicLegal';

const LegalPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  legalText,
}) => {
  return (
    <MainLayout
      title="Mentions légales"
      description="Mentions légales du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      minimalFooter
    >
      <PlasmicLegal
        content={{
          render: (props, Component) => (
            <Component
              {...props}
              className="prose prose-stone prose-h3:my-0 prose-p:my-0 prose-li:my-0 prose-ul:leading-5 max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-blue-700 prose-p:font-serif"
            >
              <ReactMarkdown>{legalText}</ReactMarkdown>
            </Component>
          ),
        }}
      />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
  legalText: string;
}> = () => {
  const footerData = getFooter();
  const legalText = getLegalText();

  return {
    revalidate: 1,
    props: { footerData, legalText },
  };
};

export default LegalPage;
