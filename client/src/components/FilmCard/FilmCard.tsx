import { FC } from "react";
import Link from "next/link";
// import Image from "next/image";
import { IMovie } from "@/types/IMovie";

import {
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Flex,
  Spacer,
  AbsoluteCenter,
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
    names,
    type,
    rating,
  }: any = {
    ...item,
  };

  console.log(item);

  return (
    <Link href={`/film/${id}`}>
      <div className={styles.movieCard}>
        <a href={`/film/${id}`}>
          <figure className={styles.cardBanner}>
            <img src={poster.previewUrl} alt={name} />
          </figure>
        </a>
        <div className={styles.titleWrapper}>
          <a href={`/film/${id}`}>
            <h3 className={styles.cardTitle}>{name}</h3>
          </a>
          <time dateTime={year}>{year}</time>
        </div>
        <div className={styles.cardMeta}>
          <div className={`${styles.badge} ${styles.badgeOutline}`}>HD</div>
          <div className={styles.duration}>
            {/* <ion-icon name="time-outline" /> */}
            <time dateTime="PT137M">137 min</time>
          </div>
          <div className={styles.rating}>
            {/* <ion-icon name="star" /> */}
            <data>{rating}</data>
          </div>
        </div>
      </div>
    </Link>
  );
};
