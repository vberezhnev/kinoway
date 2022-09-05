import { Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import { useGetFilmByIdQuery } from "@/services/KinowayService";

import { BackButton } from "@/components/UI-components/BackButton/BackButton";
import Button from "@/components/UI-components/Button/Button";
import { Info } from "@/components/Info/Info";

import styles from "./Film.module.scss";

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
  }: any = { ...data };

  const movieTitle = name ? name : isLoading ? "Загрузка" : "Без названия";
  const movieYear = year && `(${year})`;

  const items = [
    {
      caption: "Страны",
      value: countries?.map((el: number | string, idx: number | string) => (
        <Fragment key={idx}>
          {idx ? ", " : ""}
          {el.name}
        </Fragment>
      )),
      condition: countries?.length,
    },
    {
      caption: "Жанр",
      value: genres?.map((el, idx) => (
        <Fragment key={idx}>
          {idx ? ", " : ""}
          {el.name}
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
    /* {
      caption: "Бюджет",
      value: `${budget?.currency} ${convertNumbers(budget?.value)}`,
      condition: budget?.value,
    },
    { caption: "Время", value: `${movieLength} мин`, condition: movieLength },
    {
      caption: "Сборы в США",
      value: `${fees?.usa?.currency} ${convertNumbers(fees?.usa?.value)}`,
      condition: fees?.usa,
    },
    {
      caption: "Сборы в мире",
      value: `+ ${fees?.world?.currency} ${convertNumbers(worldFees)} = ${
        fees?.world?.currency
      } ${convertNumbers(fees?.world?.value)}`,
      condition: fees?.usa,
    },
    {
      caption: "Премьера в мире",
      value: convertTimestampToDate(premiere?.world, "D MMMM YYYY"),
      condition: premiere?.world,
    }, */
  ];

  return (
    <section className={styles.section}>
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
            {/* <MovieRating className={styles.rating} rating={rating} /> */}
            <span className={styles.rating}>
              {rating?.kp ? rating.kp : rating?.imdb}
            </span>
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
              <Button
                onClick={() => {
                  router.push(`https://kirlovon.dev/Kinopoisk-Watch/?id=${id}`);
                }}
                className={styles.btn}
              >
                Watch
              </Button>
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
        {/*<Tabs tabs={tabs} />
        {similarMovies?.length ? (
          <SimilarMovies movies={similarMovies} />
        ) : null}
        <Reviews /> */}
      </div>
    </section>
  );
};
