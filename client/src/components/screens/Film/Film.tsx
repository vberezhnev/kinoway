import { Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import { useGetFilmByIdQuery } from "@/services/KinowayService";
import Link from "next/link";
import Head from "next/head";

import { BackButton } from "@/components/UI-components/BackButton/BackButton";
import { ButtonPlayMovie } from "@/components/UI-components/ButtonPlayMovie/ButtonPlayMovie";

import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";
import { Info } from "@/components/Info/Info";
import {
  Reviews,
  MovieFavorite,
  MovieWatchLater,
  SimilarMovies,
  FilmTabs,
} from "./components";

import "react-tabs/style/react-tabs.css";
import { SiKinopoisk } from "react-icons/si";
import { FaImdb } from "react-icons/fa";
import {
  IoPlay,
  IoShare,
  IoDownload,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import { classNames } from "@/helpers/classNames";

import { Badge, Box, Flex } from "@chakra-ui/react";
import { Tabs } from "@/UI/Tabs/Tabs";

import styles from "./Film.module.scss";
//import { TaskAbortError } from "@reduxjs/toolkit";

export const Film = () => {
  const router = useRouter();
  const { id } = router.query;

  // const {
  //   push,
  //   query: { id },
  // } = useRouter();
  const { data, isLoading, isError } = useGetFilmByIdQuery(id);
  const {
    alternativeName,
    name,
    type,
    shortDescription,
    poster,
    year,
    rating,
    similarMovies,
    ageRating,
    fees,
    genres,
    slogan,
    budget,
    movieLength,
    countries,
    premiere,
    description,
    facts,
    persons,
    tabs,
    top10,
    top250,
    color,
  }: any = { ...data };

  const movieTitle = name ? name : isLoading ? "Загрузка" : "Без названия";
  const movieYear = year && `(${year})`;
  const worldFees = fees?.world?.value; // - fees?.usa?.value

  // @ts-ignore
  const imdbId = `${data?.externalId?.imdb}`;

  const items = [
    {
      caption: "Страны",
      value: countries?.map((el: any, idx: any) => (
        <Fragment key={idx!}>
          {idx ? ", " : ""}
          {el?.name}
        </Fragment>
      )),
      condition: countries?.length,
    },
    {
      caption: "Дата выхода",
      value: movieYear,
      condition: movieYear,
    },
    {
      caption: "Жанр",
      value: genres?.map((el: any, idx: any) => (
        <Fragment key={idx!}>
          {idx ? ", " : ""}
          {el?.name ? el?.name : "Неизвестен"}
        </Fragment>
      )),
      condition: genres?.length,
    },
    { caption: "Слоган", value: slogan, condition: slogan },
    {
      caption: "Возраст",
      value: (
        <Box
          display="inline-block"
          p="1px 3px 0px"
          borderRadius="3px"
          fontSize="11px"
          lineHeight="16px"
          fontWeight="600"
          border="1px solid"
          borderColor="#000"
        >
          {ageRating}+
        </Box>
      ),
      condition: ageRating,
    },
    {
      caption: "Бюджет",
      value: `${budget?.currency} ${budget?.value}`, //${convertNumbers(budget?.value)}
      condition: budget?.value,
    },
    { caption: "Время", value: `${movieLength} мин`, condition: movieLength },
    {
      caption: "Сборы в США",
      value: `${fees?.usa?.currency ? fees?.usa?.currency : "—"}`, //${convertNumbers(fees?.usa?.value)}
      condition: fees?.usa,
    },
    {
      //${convertNumbers(worldFees)}
      caption: "Сборы в мире",
      value: `${fees?.world?.value ? fees?.world?.value : "—"} `, //${convertNumbers(fees?.world?.value)}
      condition: fees?.usa,
    },
    {
      caption: "Премьера в мире",
      value: premiere?.world, //convertTimestampToDate(premiere?.world, "D MMMM YYYY")
      condition: premiere?.world,
    },
  ];

  return (
    <main>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Kinoway — ${name}`} />
        <meta property="og:description" content={`${description}`} />
        <meta property="og:image" content={`${data?.poster?.url}`} />
        <meta
          property="og:url"
          content={`https://kinoway.vercel.app/film/${id}`}
        />
      </Head>

      <article>
        <section
          style={{
            background: `#1F1F1F`,
          }}
          className={styles.movieDetail}
        >
          <div className={styles.container}>
            <figure className={styles.movieDetailBanner}>
              <img src={data?.poster?.url} alt="Free guy movie poster" />
              <Link href={`https://kinopoisk-watch.org/player/?id=${id}`}>
                <button className={styles.playBtn}>
                  <IoPlay />{" "}
                </button>
              </Link>
            </figure>
            <div className={styles.movieDetailContent}>
              <p className={styles.detailSubtitle}>New Episodes</p>
              <h1 className={`${styles.h1} ${styles.detailTitle}`}>
                <b>{name}</b>
              </h1>
              <div className={styles.metaWrapper}>
                <div className={styles.badgeWrapper}>
                  <div className={styles.genreWrapper}>
                    <Info items={items} />
                  </div>
                  <div className={`${styles.badge} ${styles.badgeFill}`}>
                    PG 13
                  </div>
                  <div className={`${styles.badge} ${styles.badgeOutline}`}>
                    HD
                  </div>
                </div>
              </div>

              {top250 ? (
                <Badge
                  colorScheme={top250 ? "green" : "red"}
                  fontSize="1em"
                  variant="solid"
                >
                  Top 250: {top250}
                </Badge>
              ) : (
                <div></div>
              )}

              <Flex gap={3}>
                <ButtonPlayMovie
                  color="white"
                  onClick={() => {
                    router.push(`https://www.kinopoisk.ru/film/${id}`);
                  }}
                >
                  <SiKinopoisk size={30} />{" "}
                </ButtonPlayMovie>

                <ButtonPlayMovie
                  color="white"
                  onClick={() => {
                    router.push(`https://www.imdb.com/title/${imdbId}`);
                  }}
                >
                  <FaImdb size={30} />{" "}
                </ButtonPlayMovie>
              </Flex>

              <p className={styles.storyline}>{description}</p>

              <div className={styles.detailsActions}>
                <button className={styles.share}>
                  <IoShare />
                  <span>Share</span>
                </button>
                <div className={styles.titleWrapper}>
                  <p className={styles.title}>Prime Video</p>
                  <p className={styles.text}>Streaming Channels</p>
                </div>

                <ButtonPlayMovie>
                  <Link href={`https://kinopoisk-watch.org/player/?id=${id}`}>
                    <a target="_blank">
                      <span>Watch Now (Player 1)</span>
                    </a>
                  </Link>
                </ButtonPlayMovie>

                <ButtonPlayMovie>
                  <Link href={`https://flicksbar.cc/film/${id}`}>
                    <a target="_blank">
                      <span>Watch Now (Player 2)</span>
                    </a>
                  </Link>
                </ButtonPlayMovie>

                <ButtonPlayMovie>
                  <Link href={`https://ww5.frkp.lol/film/${id}`}>
                    <a target="_blank">
                      <span>Watch Now (Player 3)</span>
                    </a>
                  </Link>
                </ButtonPlayMovie>

                <ButtonPlayMovie>
                  <Link href={`https://vavada-7.com/#${id}`}>
                    <a target="_blank">
                      <span>Watch Now (Player 4)</span>
                    </a>
                  </Link>
                </ButtonPlayMovie>

                <MovieWatchLater id={data?.id} disabled={false} />
                <MovieFavorite id={data?.id} disabled={false} />
              </div>

              <Box pb={["50px", "100px"]}>
                <FilmTabs data={data} />{" "}
              </Box>

              <a href="#" download className={styles.downloadBtn}>
                <span>Download</span>
                <IoDownload />
              </a>
            </div>
          </div>
        </section>{" "}
        <section className={styles.tvSeries}>
          <div className={styles.container}>
            <p className={styles.sectionSubtitle}>Best TV Series</p>
            <h2 className={`${styles.h2} ${styles.sectionTitle}`}>
              World Best TV Series
            </h2>
            <ul className={styles.moviesList}>
              {/* {similarMovies?.length ? (
										<li>
                    <SimilarMovies movies={similarMovies} />
										</li>
										) : null}{" "} */}
            </ul>
            <Reviews />
          </div>
        </section>
      </article>
    </main>
  );
};
