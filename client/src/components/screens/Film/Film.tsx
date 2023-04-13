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
import { IoPlay, IoShare, IoDownload } from "react-icons/io5";

import { Badge, Box, Flex } from "@chakra-ui/react";
import { Tabs } from "@/UI/Tabs/Tabs";

import styles from "./Film.module.scss";
//import { TaskAbortError } from "@reduxjs/toolkit";

export const Film = () => {
  const router = useRouter();
  const { id } = router.query;
  const { push } = useRouter();

  /* const {
   *   push: { id },
   * } = useRouter(); */
  const { data, isLoading, isError } = useGetFilmByIdQuery(id);
  console.log(data);

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
  const imdbId = "data?.externalId?.imdb";
  const tmdbId = "data?.externalId?.tmdb";

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
        <meta
          property="og:title"
          content={`Kinoway — ${name ? name : "Загрузка"}`}
        />
        <meta
          property="og:description"
          content={description ? description : "Загрузка..."}
        />
        <meta
          property="og:image"
          content={data?.poster?.url ? data?.poster?.url : ""}
        />
        <meta
          property="og:url"
          content={`https://kinoway.vercel.app/film/${id}`}
        />
      </Head>

      <article>
        <section className={styles.movieDetail}>
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

              <div className={styles.badgeWrapper}>
                <div className={styles.genreWrapper}>
                  <MovieRating rating={rating} />
                </div>

                <div className={`${styles.badge} ${styles.badgeOutline}`}>
                  HD
                </div>
              </div>

              <h1 className={`${styles.h1} ${styles.detailTitle}`}>
                <b>{name}</b>
              </h1>

              <div className={styles.metaWrapper}>
                <div className={styles.badgeWrapper}>
                  <div className={styles.genreWrapper}>
                    <Info items={items} />
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

              {top10 ? (
                <Badge
                  colorScheme={top10 ? "green" : "red"}
                  fontSize="1em"
                  variant="solid"
                >
                  Top 10: {top10}
                </Badge>
              ) : (
                <div></div>
              )}

              <Flex gap={3} m={2}>
                <ButtonPlayMovie
                  color="white"
                  onClick={() => {
                    router.push(`https://www.kinopoisk.ru/film/${id}`);
                  }}
                >
                  <svg
                    width="12"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ProjectTemplate-module__ratingIcon--cEKkF"
                  >
                    <path
                      d="M2.364.009v3.529h.18L4.909.008H8.18L3.815 4.092l.18.185L12 .004v2.971L4.904 5.573v.184L12 5.109v2.786l-7.096-.648v.185L12 10.029V13L3.995 8.728l-.18.184 4.365 4.083H4.908L2.545 9.466h-.181v3.529H0V0h2.364z"
                      fill="white"
                      fillRule="evenodd"
                    ></path>
                  </svg>{" "}
                </ButtonPlayMovie>

                <ButtonPlayMovie
                  color="white"
                  onClick={() => {
                    router.push(`https://www.imdb.com/title/${imdbId}`);
                  }}
                >
                  <svg
                    width="22"
                    height="9"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ProjectTemplate-module__ratingIcon--cEKkF"
                  >
                    <g fill="white" fillRule="evenodd">
                      <path d="M0 8.885h2.281V0H0zM7.136 0l-.528 4.157-.325-2.259A61.705 61.705 0 006.007 0H3.053v8.885H5.05l.008-5.866.836 5.866h1.42l.804-5.997v5.997h1.99V0H7.135M13.672 1.604c.088.048.145.13.17.245.032.115.04.376.04.777v3.445c0 .589-.04.949-.114 1.08-.073.14-.276.205-.6.205V1.52c.243 0 .413.025.504.083zm-.026 7.281c.544 0 .958-.032 1.226-.09.276-.057.504-.163.682-.32.186-.146.316-.359.39-.629.072-.27.121-.802.121-1.596V3.134c0-.843-.032-1.408-.088-1.694a1.546 1.546 0 00-.374-.777C15.4.425 15.1.263 14.71.155 14.328.057 13.687 0 12.59 0h-1.705v8.885h2.76zM19.8 6.734c0 .425-.024.695-.066.809-.04.115-.226.172-.364.172-.13 0-.228-.057-.268-.163-.05-.107-.073-.36-.073-.752V4.45c0-.4.023-.654.065-.752.04-.097.13-.147.26-.147.138 0 .324.05.372.172.05.114.073.36.073.728v2.283zM16.836 0v8.885h2.054l.138-.564c.186.228.389.4.617.515.218.107.552.164.811.164.365 0 .674-.09.934-.286.26-.188.43-.418.503-.679.065-.262.106-.655.106-1.187V4.353c0-.532-.017-.884-.04-1.048a1.25 1.25 0 00-.204-.507 1.209 1.209 0 00-.511-.401c-.22-.09-.48-.14-.788-.14-.26 0-.593.058-.82.156-.22.107-.422.27-.608.483V0h-2.192z"></path>
                    </g>
                  </svg>{" "}
                </ButtonPlayMovie>

                <ButtonPlayMovie
                  color="white"
                  onClick={() => {
                    router.push(`https://www.themoviedb.org/movie/${tmdbId}`);
                  }}
                >
                  <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" />{" "}
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

                <ButtonPlayMovie onClick={() => push(`/room/${id}`)}>
                  {" "}
                  {/* TODO: Hardcode. Change to push */}
                  <span>Смотреть (Player 1)</span>
                </ButtonPlayMovie>

                <ButtonPlayMovie>
                  <Link href={`https://kinopoisk-watch.org/player/?id=${id}`}>
                    <a target="_blank">
                      <span>Смотреть (Player 2)</span>
                    </a>
                  </Link>
                </ButtonPlayMovie>

                <ButtonPlayMovie>
                  <Link href={`https://ww5.frkp.lol/film/${id}`}>
                    <a target="_blank">
                      <span>Смотреть (Player 3)</span>
                    </a>
                  </Link>
                </ButtonPlayMovie>

                <ButtonPlayMovie>
                  <Link href={`https://vavada-7.com/#${id}`}>
                    <a target="_blank">
                      <span>Смотреть (Player 4)</span>
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
            {/* <p className={styles.sectionSubtitle}>Best TV Series</p>
									<h2 className={`${styles.h2} ${styles.sectionTitle}`}>
									World Best TV Series
									</h2> */}
            <ul className={styles.moviesList}>
              {similarMovies?.length ? (
                <li>
                  <SimilarMovies movies={similarMovies} />
                </li>
              ) : null}{" "}
            </ul>
            <Reviews />
          </div>
        </section>
      </article>
    </main>
  );
};
