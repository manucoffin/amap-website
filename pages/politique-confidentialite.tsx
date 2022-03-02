import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MainLayout } from 'layouts';
import { getFooter } from 'lib/footer';
import { getPrivacyPolicyText } from 'lib/legal';
import { Footer } from 'lib/netlify-types';
import { PlasmicPrivacyPolicy } from '../components/plasmic/amap_website/PlasmicPrivacyPolicy';

const PrivacyPolicyPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  footerData,
  privacyPolicyText,
}) => {
  return (
    <MainLayout footerData={footerData} minimalFooter>
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
