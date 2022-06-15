import { NextSeo, NextSeoProps, DefaultSeo as NextDefaultSeo, DefaultSeoProps } from 'next-seo'; // eslint-disable-line no-restricted-imports

export const DefaultSeo = (props: DefaultSeoProps) => {
  return (
    <>
      <NextDefaultSeo
        titleTemplate="%s | AMAP de la Goutte d'Eau"
        description="Association pour le Maintien d'une Agriculture Paysanne"
        openGraph={{
          type: 'website',
          url: process.env.NEXT_PUBLIC_BASE_URL,
          title: "AMAP de la Goutte d'Eau",
          description: "AMAP de la Goutte d'Eau",
          images: [
            {
              url: '/og_image.png',
              width: 1200,
              height: 630,
              alt: "AMAP de la Goutte d'Eau logo",
            },
          ],
        }}
        additionalLinkTags={[
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
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
