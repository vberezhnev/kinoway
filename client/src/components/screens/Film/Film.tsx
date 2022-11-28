import { Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import { useGetFilmByIdQuery } from "@/services/KinowayService";
import Link from "next/link";
import Head from "next/head";

import { SiKinopoisk } from "react-icons/si";
import { MdFavoriteBorder } from "react-icons/md";
import { SlFilm } from "react-icons/sl";

import { BackButton } from "@/components/UI-components/BackButton/BackButton";
import { ButtonPlayMovie } from "@/components/UI-components/ButtonPlayMovie/ButtonPlayMovie";

import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";
import { Info } from "@/components/Info/Info";
import {
    Reviews,
    //MovieFavorite,
    SimilarMovies,
    FilmTabs,
} from "./components";

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
    console.log("here");
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
    }: any = { ...data };

    const movieTitle = name ? name : isLoading ? "Загрузка" : "Без названия";
    const movieYear = year && `(${year})`;
    const worldFees = fees?.world?.value - fees?.usa?.value;

    console.log(similarMovies);

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
            value: `${fees?.usa?.currency} USA`, //${convertNumbers(fees?.usa?.value)}
            condition: fees?.usa,
        },
        {
            //${convertNumbers(worldFees)}
            caption: "Сборы в мире",
            value: `$ ${fees?.world?.value}`, //${convertNumbers(fees?.world?.value)}
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
                        <h1 className={styles.title}>
                            {movieTitle} {movieYear}
                        </h1>
                        <h3 className={styles.originalTitle}>{alternativeName}</h3>
                        <span className={styles.shortDescription}>
                            {shortDescription ? shortDescription : ""}
                        </span>
                        <div className={styles.btns}>
                            <ButtonPlayMovie color="orange">
                                <Link href={`https://kirlovon.dev/Kinopoisk-Watch/?id=${id}`}>
                                    <a target="_blank">
                                        <b>Смотреть</b>
                                    </a>
                                </Link>
                            </ButtonPlayMovie>
                            <ButtonPlayMovie
                                color="black"
                                onClick={() => {
                                    router.push(`https://www.kinopoisk.ru/film/${id}`);
                                }}
                            >
                                <MdFavoriteBorder />{" "}
                            </ButtonPlayMovie>
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
                                    router.push(`https://www.kinopoisk.ru/film/${id}`);
                                }}
                            >
                                <SlFilm />{" "}
                            </ButtonPlayMovie>

                            {/* <MovieFavorite
                className={styles.btn}
                variant="regular"
                id={data?.id}
                disabled={isError}
								/> */}
                        </div>
                        <h2 className={styles.subtitle}>About this {type}</h2>
                        <Info items={items} />
                    </div>
                </div>
                <FilmTabs data={data} />
                {similarMovies?.length ? (
                    <SimilarMovies movies={similarMovies} />
                ) : null}{" "}
            </div>
        </section>
    );
};
