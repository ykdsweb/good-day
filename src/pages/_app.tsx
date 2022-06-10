import React, { useEffect } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// コンポーネントはこのページに追加していく
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
