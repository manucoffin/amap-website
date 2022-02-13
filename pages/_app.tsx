import "../styles/global.css";
import { AppProps } from "next/app";
import { PlasmicRootProvider } from "@plasmicapp/react-web";

function App({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default App;
