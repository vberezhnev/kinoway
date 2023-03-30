import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "@/types/IMovie";
import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";

import { Badge } from "@chakra-ui/react";
import styles from "./FilmList.module.scss";

interface FilmItemProps {
  item: IMovie;
}

const FilmList: FC<FilmItemProps> = ({ item }) => {
  console.log(item);
  const {
    id,
    poster,
    description,
    year,
    name,
    names,
    type,
    rating,
    alternativeName,
    movieLength,
    top10,
    top250,
  }: any = {
    ...item,
  };

  return (
    <div className={styles.movieCard}>
      <div className={styles.poster}>
        <Image
          className={styles.image}
          src={poster ? poster.previewUrl : "/public/vercel.svg"}
          width={100}
          height={160}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <h3 className={styles.title}>
            <Link href={`/film/${id}`}>
              <a>{name}</a>
            </Link>
          </h3>
          <p className={styles.subTitle}>
            {alternativeName}, {year}
          </p>
          <p className={styles.duration}>{movieLength}</p>
          <MovieRating rating={rating} className={styles.rating} />
          {/* <p className={styles.description}>{description}</p> */}
        </div>

        <div className={styles.user}>
          <div className={styles.stats}>
            {top10 ? (
              <Badge
                className={styles.stat}
                colorScheme="green"
                fontSize="14px"
                variant="solid"
              >
                Top 10: {top10}
              </Badge>
            ) : null}
            {top250 ? (
              <Badge
                className={styles.stat}
                colorScheme="green"
                fontSize="14px"
                variant="solid"
              >
                Top 250: {top250}
              </Badge>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmList;
