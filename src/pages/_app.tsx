import {AppProps} from 'next/app'
import "@exampledev/new.css";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
  
export default MyApp
