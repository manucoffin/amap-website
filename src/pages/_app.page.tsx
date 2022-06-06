import '../styles/global.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import PlausibleProvider from 'next-plausible';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'src/core/components/Seo';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="amap-goutte-eau.fr">
      <PlasmicRootProvider>
        <DefaultSeo />
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </PlausibleProvider>
  );
}

export default App;
