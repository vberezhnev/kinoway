import type { NextPage } from "next";
import Head from "next/head";
//import Image from "next/image";
import Header from "../components/Header/Header";

import Home from "../components/screens/Home/Home";

const MainPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kinomore</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
					
					</Head>
			<Header />
      <Home />
    </div>
  );
};

export default MainPage;
