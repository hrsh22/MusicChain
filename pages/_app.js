import '@/styles/globals.css'
import { getAuth } from "../auth/getArcanaAuth";
import { ProvideAuth } from "../auth/useArcanaAuth";
import { Chat } from "@pushprotocol/uiweb";
const auth = getAuth();

export default function App({ Component, pageProps }) {
  return( 
    <>
    <ProvideAuth provider={auth}>
  <Component {...pageProps} />
  </ProvideAuth>
  <Chat
  account="0xB78721b29c028B16ab25f4a2adE1d25fbf8B2d74" //user address
  supportAddress="0xC76139fcB9e4952CE9Fb3183C6c3af69534233FE" //support address
  apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
  env="staging"
  modalTitle='Support team'
/>
</>
  );
}
