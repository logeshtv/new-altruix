import Head from 'next/head';
import '../styles/global.css';
import { SessionProvider } from "next-auth/react"


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
