import '../styles/global.css';
import PlausibleProvider from 'next-plausible';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'src/core/components/Seo';
import config from 'react-reveal/globals';
// import AuthContextProvider from '@src/core/contexts/AuthContext';
import { IdentityContextProvider } from 'react-netlify-identity';

config({ ssrFadeout: true });

function App({ Component, pageProps }: AppProps) {
  const url = 'https://amap-goutte-eau.netlify.app';
  return (
    // <AuthContextProvider>
    <IdentityContextProvider url={url}>
      <PlausibleProvider domain="amap-goutte-eau.fr">
        <DefaultSeo />
        <Component {...pageProps} />
      </PlausibleProvider>
    </IdentityContextProvider>
    // </AuthContextProvider>
  );
}

export default App;
