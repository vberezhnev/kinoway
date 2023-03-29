import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { initStore } from "@/store/store";
import Head from "next/head";
import { getNewFilms, getNewSeries } from "@/services/KinowayService";

import Home from "../components/screens/Home/Home";

const MainPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kinoway</title>
        <link rel="icon" href="/public/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kinoway" />
        <meta
          property="og:description"
          content="Онлайн сервис по просмотру фильмов и сериалов"
        />
        <meta
          property="og:image"
          content="http://kinoway.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.f9e558d9.png&w=640&q=75"
        />
        <meta property="og:url" content="https://kinoway.vercel.app" />
      </Head>
      <Home />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const store = initStore();
  const state = store.getState();
  const { filmsLimit, seriesLimit } = state.loadReducer;

  await store.dispatch(getNewFilms.initiate(filmsLimit));
  await store.dispatch(getNewSeries.initiate(seriesLimit));

  return { props: { initialReduxState: store.getState() } };
};

export default MainPage;
