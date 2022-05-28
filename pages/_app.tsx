import '../styles/global.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import PlausibleProvider from 'next-plausible';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'components/Seo';

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
