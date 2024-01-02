import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Head>
          <title>SME portfolio</title>
          <meta name="description" content="My portfolio website" />
          <meta property="og:title" content="SME portfolio" />
          <meta
            property="og:description"
            content="Explore my diverse portfolio showcasing a collection of my creative works and projects. From web development and design to digital art and innovation, my portfolio reflects my passion for pushing boundaries and crafting unique digital experiences. Dive into a world where creativity meets functionality, and discover the skills and expertise that drive my journey. Welcome to my digital playground, where ideas come to life and innovation knows no bounds."
          />
          <meta property="og:url" content="https://sme-portfolio.vercel.app/" />
          <meta
            property="og:image"
            content="https://sme-portfolio.vercel.app/about"
          />
        </Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
