import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { useStore } from "../store/store";

import { Layout } from "@/components/Layout/Layout";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    // @ts-ignore
    const store = useStore(pageProps.initialReduxState);

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
            <Head>
                <title>
                    Онлайн-кинотеатр Kinomore - фильмы, сериалы и мультфильмы смотреть
                    онлайн бесплатно в хорошем качестве
                </title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta property="og:description" content="Kinoway - фильмы и сериалы" />
                <meta property="og:title" content="Kinoway - фильмы и сериалы" />
                <meta
                    name="description"
                    content="Смотрите фильмы онлайн, в качестве, приятной домашней обстановке. Смотрите что хотите и когда хотите: сериалы, фильмы, мультфильмы и многое другое."
                />
                <meta
                    name="keywords"
                    content="фильмы сериалы онлайн в хорошем отличном качестве кино видео смотреть новинки кинофильмы онлайн кинотеатр 2012 2013 просмотр видеоролики"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
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
