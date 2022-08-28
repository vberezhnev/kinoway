import type { AppProps } from "next/app";
import { useStore } from "../store/store";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
