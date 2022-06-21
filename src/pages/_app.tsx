import React, { useEffect } from "react";
import Footer from "../components/layouts/Footer";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"タイトル"}</title>
        <meta property="description" content={"description"} />
        <meta property="og:title" content={"title"} />
        <meta property="og:description" content={"description"} />
        <meta
          property="og:image"
          content={`${process.env.SITE_URL}/ogp_large.png`}
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
