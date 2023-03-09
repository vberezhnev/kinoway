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
import { Reviews, MovieFavorite, SimilarMovies, FilmTabs } from "./components";

import "react-tabs/style/react-tabs.css";

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
    color,
  }: any = { ...data };

  const movieTitle = name ? name : isLoading ? "Загрузка" : "Без названия";
  const movieYear = year && `(${year})`;
  const worldFees = fees?.world?.value; // - fees?.usa?.value

  // @ts-ignore
  const imdbId = `${data?.externalId?.imdb}`;

  console.log(data);
  console.log(color ? color : "Unknown");

  const isTop250 = () => {
    // TODO
  };

  const isTop10 = () => {
    // TODO
  };

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
    <section className={styles.section}>
      <Head>
        <title>{movieTitle}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.top}>
          <BackButton />
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
            <h1 className={styles.title}>{movieTitle}</h1>
            <h3 className={styles.originalTitle}>{alternativeName}</h3>
            <span className={styles.shortDescription}>
              {shortDescription ? shortDescription : ""}
            </span>
            <div className={styles.btns}>
              <ButtonPlayMovie color="orange">
                <div>
                  <a target="_blank">
                    <Link href={`https://kinopoisk-watch.org/player/?id=${id}`}>
                      <b>Смотреть (Плеер 1)</b>
                    </Link>
                  </a>
                </div>
              </ButtonPlayMovie>

              <ButtonPlayMovie color="orange">
                <div>
                  <a target="_blank">
                    <Link href={`https://flicksbar.cc/film/${id}/`}>
                      <b>Смотреть (Плеер 2)</b>
                    </Link>
                  </a>
                </div>
              </ButtonPlayMovie>

              <ButtonPlayMovie color="orange">
                <div>
                  <a target="_blank">
                    <Link href={`https://vavada-7.com/#${id}`}>
                      <b>Смотреть (Плеер 3)</b>
                    </Link>
                  </a>
                </div>
              </ButtonPlayMovie>

              <ButtonPlayMovie color="orange">
                <div>
                  <a target="_blank">
                    <Link href={`https://ww5.frkp.lol/film/${id}/`}>
                      <b>Смотреть (Плеер 4)</b>
                    </Link>
                  </a>
                </div>
              </ButtonPlayMovie>

              {/* <div
                style={{
                  backgroundColor: color,
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  margin: "5px",
                }}
								></div> */}

              <MovieFavorite
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
            <h2 className={styles.subtitle}>About this {type}</h2>
            <Info items={items} />
          </div>
        </div>
        <FilmTabs data={data} />
        <Reviews />
        {similarMovies?.length ? (
          <SimilarMovies movies={similarMovies} />
        ) : null}{" "}
      </div>
    </section>
  );
};
