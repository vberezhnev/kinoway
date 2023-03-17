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

import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
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
    <>
      <Head>
        <title>{movieTitle}</title>
      </Head>
      <section className={styles.section}>
        <Box pb={["100px", "70px", "50px"]} p="2vh">
          <Box>
            <Box
              alignItems="center"
              justifyContent="space-between"
              mb={["30px", "25px"]}
            >
              <Flex>
                <BackButton />
              </Flex>
            </Box>
            <Box mt="2vh" mb={["50px", "30px"]}>
              <Flex>
                <Box
                  position="relative"
                  mr={["50px", "40px", "40px"]}
                  mb={["50px", "30px", "20px"]}
                  width="fit-content"
                  flexShrink="0"
                >
                  <Image
                    position="relative"
                    w={["300px", "250px"]}
                    height="auto"
                    style={{ aspectRatio: "2 / 3" }}
                    borderRadius="10px"
                    overflow="hidden"
                    objectFit="cover"
                    src={data?.poster?.url}
                    alt={shortDescription}
                  />
                  <MovieRating rating={rating} />
                </Box>
                <Box w="full">
                  <Heading
                    fontSize={{ base: "40px", md: "26px" }}
                    fontWeight="800"
                    lineHeight={["48px", "33px"]}
                    maxW="650px"
                    mb={["8px", "15px"]}
                  >
                    {movieTitle} {movieYear}
                  </Heading>
                  <Heading
                    fontWeight="200"
                    fontSize="18px"
                    verticalAlign="middle"
                    letterSpacing="-0.2px"
                    lineHeight={["48px", "33px"]}
                    mb="8px"
                  >
                    {alternativeName}
                  </Heading>

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

                  <Box
                    alignItems="center"
                    mt="15px"
                    pt="10px"
                    pr="10px"
                    pb="10px"
                    pl="0px"
                    mb={["", "25px"]}
                  >
                    <Flex wrap="wrap">
                      <ButtonPlayMovie>
                        <Box>
                          <a target="_blank">
                            <Link
                              href={`https://kinopoisk-watch.org/player/?id=${id}`}
                            >
                              <b>Смотреть (Плеер 1)</b>
                            </Link>
                          </a>
                        </Box>
                      </ButtonPlayMovie>

                      <ButtonPlayMovie>
                        <Box>
                          <Link href={`https://flicksbar.cc/film/${id}/`}>
                            <a target="_blank">
                              <b>Смотреть (Плеер 2)</b>
                            </a>
                          </Link>
                        </Box>
                      </ButtonPlayMovie>

                      <ButtonPlayMovie>
                        <Box>
                          <a target="_blank">
                            <Link href={`https://vavada-7.com/#${id}`}>
                              <b>Смотреть (Плеер 3)</b>
                            </Link>
                          </a>
                        </Box>
                      </ButtonPlayMovie>

                      <ButtonPlayMovie>
                        <Box>
                          <a target="_blank">
                            <Link href={`https://ww5.frkp.lol/film/${id}/`}>
                              <b>Смотреть (Плеер 4)</b>
                            </Link>
                          </a>
                        </Box>
                      </ButtonPlayMovie>

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
                    </Flex>
                  </Box>
                  <Heading
                    fontWeight="800"
                    fontSize={["24px", "20px"]}
                    lineHeight="30px"
                  >
                    О фильме
                  </Heading>
                  <Info items={items} />
                </Box>
              </Flex>
            </Box>
            <FilmTabs data={data} />
            {similarMovies?.length ? (
              <SimilarMovies movies={similarMovies} />
            ) : null}
            <Reviews />
          </Box>
        </Box>
      </section>
    </>
  );
};
