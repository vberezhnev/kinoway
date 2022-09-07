import type { AppProps } from "next/app";
import { useStore } from "../store/store";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { motion } from "framer-motion";

import { Layout } from "@/components/Layout/Layout";
import "../styles/main.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Layout>
          <motion.div
            key={router.route}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.9,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1,
                },
              },
            }}
          >
            {" "}
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
