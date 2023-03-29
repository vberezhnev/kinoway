import { FC } from "react";
import Link from "next/link";
// import Image from "next/image";
import { IMovie } from "@/types/IMovie";

import {
  Heading,
  Stack,
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import styles from "./FilmCard.module.scss";
import { MovieRating } from "../UI-components/MovieRating/MovieRating";

interface FilmItemProps {
  item: IMovie;
}

export const FilmCard: FC<FilmItemProps> = ({ item }) => {
  const {
    id,
    poster,
    description,
    year,
    name,
    alternativeName,
    movieLength,
    names,
    type,
    rating,
  }: any = {
    ...item,
  };

  return (
    <div className={styles.movieCard}>
      <Link href={`/film/${id}`}>
        <figure className={styles.cardBanner}>
          <img src={poster?.url} alt={description} className={styles.img} />
        </figure>
      </Link>
      <div className={styles.titleWrapper}>
        <a href={`/film/${id}`}>
          <h3 className={styles.cardTitle}>{name}</h3>
        </a>
        <time>
          <b>{year}</b>
        </time>
      </div>
      <div className={styles.cardMeta}>
        <div className={`${styles.badge} ${styles.badgeFill}`}>HD</div>
        <div className={styles.duration}>
          <time>{movieLength} мин</time>
        </div>
        <div className={styles.rating}></div>
        <MovieRating rating={rating} />
      </div>
    </div>
  );
};
