import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SME | Front-end Dev.</title>
        <meta name="description" content="My portfolio website" />
        <meta property="og:title" content="SME | Front-end Dev." />
        <meta
          property="og:description"
          content="Explore my diverse portfolio showcasing a collection of my creative works and projects."
        />
        <meta property="og:url" content="https://sme-portfolio.vercel.app" />
        <meta
          property="og:image"
          content={`https://sme-portfolio.vercel.app/assets/Phone.png`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
