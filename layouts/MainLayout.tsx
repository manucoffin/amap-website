import { Footer } from 'components';
import { Seo } from 'components/Seo';
import { Footer as FooterData } from 'lib/netlify-types';

interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements['main']> {
  title: string;
  description: string;
  footerData: FooterData;
  minimalFooter?: boolean;
}

export const MainLayout = ({ title, description, footerData, minimalFooter, ...props }: Props) => {
  return (
    <>
      <Seo title={title} description={description} />
      <main {...props} />

      <Footer data={footerData} minimal={minimalFooter} />
    </>
  );
};
