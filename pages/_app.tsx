import '../styles/global.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'components/Seo';

function App({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider>
      <DefaultSeo />
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default App;
