import Head from "next/head";
import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Footer from "../components/layouts/Footer";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"GOOD-DAY(グッディ)|岡山県倉敷市の個室シェアサロン"}</title>
        <meta
          property="description"
          content={
            "フリーランス美容師として活躍したいスタイリストさんへ。岡山・倉敷エリアで独立するならGOOD-DAY。グッディなら今よりもっと自分らしく働けます。"
          }
        />
        <meta name="robots" content="noindex" />
        <meta property="" content={"title"} />
        <meta property="" content={"description"} />
      </Head>
      <HamburgerMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
