import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Orquesta Sinfonica de Carabobo</title>
        <meta
          name='Orquesta Sinfonica de Carabobo'
          content='TDesde el corazón de Carabobo, resonando con historia y pasión.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/sinfonica.ico' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
