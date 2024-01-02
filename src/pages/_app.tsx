import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaImage from "../../public/assets/projects/Phone.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SME portfolio</title>
        <meta name="description" content="My portfolio website" />
        <meta property="og:title" content="SME portfolio" />
        <meta
          property="og:description"
          content="Explore my diverse portfolio showcasing a collection of my creative works and projects."
        />
        <meta
          property="og:url"
          content="https://sme-portfolio.vercel.app/assets/projects/Phone.png"
        />
        <meta
          property="og:image"
          content={`https://sme-portfolio.vercel.app/assets/projects/Phone.png`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
