import type { AppProps } from "next/app";
import { useStore } from "../store/store";
import { Provider } from "react-redux";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
