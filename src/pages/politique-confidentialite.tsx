import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'src/core/layouts';
import { getFooter } from 'src/core/lib/footer';
import { getPrivacyPolicyText } from 'src/core/lib/legal';
import { Footer } from 'src/core/lib/netlify-types';
import { PlasmicPrivacyPolicy } from '../core/components/plasmic/amap_website/PlasmicPrivacyPolicy';

const PrivacyPolicyPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  privacyPolicyText,
}) => {
  return (
    <MainLayout
      title="Politique de confidentialité"
      description="Politique de confidentialité du site de l'AMAP de la Goutte d'Eau"
      footerData={footerData}
      minimalFooter
    >
      <PlasmicPrivacyPolicy
        content={{
          render: (props, Component) => (
            <Component
              {...props}
              className="prose prose-stone prose-h3:my-0 prose-p:my-0 prose-li:my-0 prose-ul:leading-5 max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-blue-700 prose-p:font-serif prose-li:font-serif"
            >
              <ReactMarkdown>{privacyPolicyText}</ReactMarkdown>
            </Component>
          ),
        }}
      />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  footerData: Footer;
  privacyPolicyText: string;
}> = () => {
  const footerData = getFooter();
  const privacyPolicyText = getPrivacyPolicyText();

  return {
    revalidate: 1,
    props: { footerData, privacyPolicyText },
  };
};

export default PrivacyPolicyPage;
