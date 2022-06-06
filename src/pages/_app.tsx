import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

// コンポーネントはこのページに追加していく
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
