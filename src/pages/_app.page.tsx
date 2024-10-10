import '../styles/global.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'src/core/components/Seo';
import config from 'react-reveal/globals';
import Script from 'next/script';
import { isProduction } from '@src/core/lib';

config({ ssrFadeout: true });

function App({ Component, pageProps }: AppProps) {
  const analyticsSrc = process.env.ANALYTICS_URL;
  const websiteId = process.env.ANALYTICS_WEBSITE_ID;

  return (
    <>
      {isProduction && (
        <Script strategy="afterInteractive" defer src={analyticsSrc} data-website-id={websiteId} />
      )}

      {/* <Script
        strategy="afterInteractive"
        data-domain="amap-goutte-eau.fr"
        defer
        src="https://plausible.io/js/plausible.js"
      /> */}

      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}

export default App;
