import { Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import { useGetFilmByIdQuery } from "@/services/KinowayService";
import Link from "next/link";
import Head from "next/head";

import { SiKinopoisk } from "react-icons/si";
import { FaImdb } from "react-icons/fa";

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
import { classNames } from "@/helpers/classNames";

import { Badge, Box, Button } from "@chakra-ui/react";
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

  console.log(data);
  // <Tabs tabs={tabs} />

  const movieTitle = name ? name : isLoading ? "Загрузка" : "Без названия";
  const movieYear = year && `(${year})`;
  const worldFees = fees?.world?.value; // - fees?.usa?.value

  // @ts-ignore
  const imdbId = `${data?.externalId?.imdb}`;

  const isTop250: boolean = () => {
    if (top250 != null) {
      console.log("This film in 250");
      return true;
    } else {
      return false;
    }
  };

  /* const isTop10: boolean = () => {
   *   if (top10 != null) {
   *     console.log("This film in 10");
   *     return true;
   *   } else {
   *     return false;
   *   }
   * }; */

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
      value: <span className={styles.age}>{ageRating}+</span>,
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
    <>
      <Head>
        <title>{movieTitle}</title>
      </Head>
      <section className={styles.section}>
        <div className={classNames("container wrapper", styles.container)}>
          <Box>
            <div className={styles.top}>
              <BackButton />
              {isTop250 ? (
                <Badge colorScheme="green" fontSize="1em" variant="solid">
                  Top 250: {top250}
                </Badge>
              ) : (
                <div>nothing</div>
              )}
            </div>
            <div className={styles.content}>
              <div className={styles.left}>
                <img
                  className={styles.image}
                  src={data?.poster?.url}
                  alt={shortDescription}
                />
                <MovieRating className={styles.rating} rating={rating} />
              </div>
              <div className={styles.right}>
                <p className={styles.title}>
                  {movieTitle} {movieYear}
                </p>
                <span className={styles.originalTitle}>{alternativeName}</span>
                <div className={styles.btns}>
                  <ButtonPlayMovie>
                    <div>
                      <a target="_blank">
                        <Link
                          href={`https://kinopoisk-watch.org/player/?id=${id}`}
                        >
                          <b>Смотреть (Плеер 1)</b>
                        </Link>
                      </a>
                    </div>
                  </ButtonPlayMovie>

                  <ButtonPlayMovie>
                    <div>
                      <a target="_blank">
                        <Link href={`https://flicksbar.cc/film/${id}/`}>
                          <b>Смотреть (Плеер 2)</b>
                        </Link>
                      </a>
                    </div>
                  </ButtonPlayMovie>

                  <ButtonPlayMovie>
                    <div>
                      <a target="_blank">
                        <Link href={`https://vavada-7.com/#${id}`}>
                          <b>Смотреть (Плеер 3)</b>
                        </Link>
                      </a>
                    </div>
                  </ButtonPlayMovie>

                  <ButtonPlayMovie>
                    <div>
                      <a target="_blank">
                        <Link href={`https://ww5.frkp.lol/film/${id}/`}>
                          <b>Смотреть (Плеер 4)</b>
                        </Link>
                      </a>
                    </div>
                  </ButtonPlayMovie>

                  <br />

                  <MovieFavorite
                    className={styles.btn}
                    id={data?.id}
                    disabled={false}
                  />

                  <MovieWatchLater
                    className={styles.btn}
                    id={data?.id}
                    disabled={false}
                  />

                  <ButtonPlayMovie
                    color="black"
                    onClick={() => {
                      router.push(`https://www.kinopoisk.ru/film/${id}`);
                    }}
                  >
                    <SiKinopoisk />{" "}
                  </ButtonPlayMovie>

                  <ButtonPlayMovie
                    color="black"
                    onClick={() => {
                      router.push(`https://www.imdb.com/title/${imdbId}`);
                    }}
                  >
                    <FaImdb />{" "}
                  </ButtonPlayMovie>
                </div>
                <p className={styles.subtitle}>О фильме</p>
                <Info items={items} />
              </div>
            </div>
            <FilmTabs data={data} />
            {similarMovies?.length ? (
              <SimilarMovies movies={similarMovies} />
            ) : null}
            <Reviews />
          </Box>
        </div>
      </section>
    </>
  );
};
