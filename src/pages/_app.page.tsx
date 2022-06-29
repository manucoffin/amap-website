import '../styles/global.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'src/core/components/Seo';
import config from 'react-reveal/globals';
import Script from 'next/script';

config({ ssrFadeout: true });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain="amap-goutte-eau.fr"
        defer
        src="https://plausible.io/js/plausible.js"
      />

      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}

export default App;
