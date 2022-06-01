import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" lang="fr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&family=Amatic+SC:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <script async defer data-website-id="8d6a2634-f49c-413b-8f56-e8c5b65227e5" src="https://s.abla.io/abla.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
