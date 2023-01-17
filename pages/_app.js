import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Components, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Components {...pageProps} />
  </>
);
