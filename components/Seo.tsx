import { NextSeo, NextSeoProps, DefaultSeo as NextDefaultSeo, DefaultSeoProps } from 'next-seo'; // eslint-disable-line no-restricted-imports

export const DefaultSeo = (props: DefaultSeoProps) => {
  return (
    <>
      <NextDefaultSeo
        titleTemplate="%s | AMAP de la Goutte d'Eau"
        description="Association pour le Maintien d'une Agriculture Paysanne"
        openGraph={{
          type: 'website',
          url: 'https://amap-goutte-eau.fr/',
        }}
        twitter={{
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicon-16x16.png' },
        ]}
        {...props}
      />
    </>
  );
};

export const Seo = (
  props: Omit<NextSeoProps, 'title'> & { title: NonNullable<NextSeoProps['title']> }
) => {
  return <NextSeo {...props} />;
};
