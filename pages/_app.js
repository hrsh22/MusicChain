import '@/styles/globals.css'
import { getAuth } from "../auth/getArcanaAuth";
import { ProvideAuth } from "../auth/useArcanaAuth";

const auth = getAuth();

export default function App({ Component, pageProps }) {
  return( 
    <ProvideAuth provider={auth}>
  <Component {...pageProps} />
  </ProvideAuth>
  );
}
