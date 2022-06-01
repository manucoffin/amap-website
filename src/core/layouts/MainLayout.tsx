import PlausibleProvider from 'next-plausible';
import { NextSeoProps } from 'next-seo';
import { Footer } from '@core/components';
import { Seo } from '@core/components/Seo';
import { Footer as FooterData } from '@cms/models';

interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements['main']> {
  title: string;
  description: string;
  footerData: FooterData;
  footerVariant?: 'minimal' | 'full';
  seoProps?: Omit<NextSeoProps, 'title'>;
}

export const MainLayout = ({
  title,
  seoProps,
  description,
  footerData,
  footerVariant = 'full',
  ...props
}: Props) => {
  return process.env.NODE_ENV === 'production' ? (
    <PlausibleProvider domain="amap-goutte-eau.fr">
      <div>
        <Seo title={title} description={description} {...seoProps} />
        <main {...props} />
        <Footer data={footerData} variant={footerVariant} />
      </div>
    </PlausibleProvider>
  ) : (
    <div>
      <Seo title={title} description={description} {...seoProps} />
      <main {...props} />
      <Footer data={footerData} variant={footerVariant} />
    </div>
  );
};
