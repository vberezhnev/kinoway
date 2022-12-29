import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useStore } from "../store/store";
import { useEffect } from "react";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { Layout } from "@/components/Layout/Layout";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
    console.log(pageProps);
    const store = useStore(pageProps.initialReduxState);

    const router = useRouter();

    NProgress.configure({
        showSpinner: false,
    });

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);

        return () => {
            router.events.off("routeChangeStart", handleRouteStart);
            router.events.off("routeChangeComplete", handleRouteDone);
            router.events.off("routeChangeError", handleRouteDone);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider defaultTheme="system">
                <Layout>
                    <motion.div
                        key={router.route}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: 0.9,
                                opacity: 0.3,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: 0.4,
                                },
                            },
                        }}
                    >
                        {" "}
                        <Component {...pageProps} />
                    </motion.div>
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
