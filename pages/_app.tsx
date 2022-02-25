import '../styles/global.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default App;
