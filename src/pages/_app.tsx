import '../styles/globals.css'
import Header from '../components/Header'
import type { AppProps } from 'next/app'

// コンポーネントはこのページに追加していく
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
