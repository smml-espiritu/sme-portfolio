import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SME | Front-end Dev.</title>
        {/* HTML Meta Tags */}
        <meta
          name="description"
          content="Explore my diverse portfolio showcasing a collection of my creative works and projects."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://sme-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SME | Front-end Dev." />
        <meta
          property="og:description"
          content="Explore my diverse portfolio showcasing a collection of my creative works and projects."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/6c008fbb-3df2-41a1-9183-2c54ff8b4b61.png?token=MfztP2NVnm3PafD0fsLxb-vpv9flIbESIiPolaCy0Ws&height=340&width=577&expires=33240177403"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sme-portfolio.vercel.app" />
        <meta
          property="twitter:url"
          content="https://sme-portfolio.vercel.app/"
        />
        <meta name="twitter:title" content="SME | Front-end Dev." />
        <meta
          name="twitter:description"
          content="Explore my diverse portfolio showcasing a collection of my creative works and projects."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/6c008fbb-3df2-41a1-9183-2c54ff8b4b61.png?token=MfztP2NVnm3PafD0fsLxb-vpv9flIbESIiPolaCy0Ws&height=340&width=577&expires=33240177403"
        />

        {/* Meta Tags Generated via https://www.opengraph.xyz */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
