import type { AppProps } from "next/app";
import { useStore } from "../store/store";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { motion } from "framer-motion";

import "../styles/main.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <motion.div
          key={router.route}
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          variants={{
            hidden: { opacity: 1, x: -200, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 1, x: 0, y: -100 },
          }}
        >
          {" "}
          <Component {...pageProps} />
        </motion.div>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
