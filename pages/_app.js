import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
