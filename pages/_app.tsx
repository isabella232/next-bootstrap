import '../scss/index.scss';
import { AppProps } from 'next/dist/next-server/lib/router/router';

/* eslint-disable-next-line @typescript-eslint/naming-convention */
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
