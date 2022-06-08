import React, { useEffect } from "react"
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Head from "next/head"
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../components/utils/theme"
import "../styles/globals.css"

// コンポーネントはこのページに追加していく
export default function MyApp({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side")
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])

  return (
    <React.Fragment>

      <Head>
        <Header />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

      <Footer />
      
    </React.Fragment>
  );
}
