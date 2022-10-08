import { IMovie } from "@/types/IMovie";
import { FC } from "react";
import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";
import Link from "next/link";
import styles from "./SearchItem.module.scss";
import Image from "next/image";

interface SearchItemProps {
  item: IMovie;
}

export const SearchItem: FC<SearchItemProps> = ({ item }) => {
  const { title, id, description, year, alternativeName, movieLength, rating } =
    item;

  console.log(item);

  return (
    <Link href={`/film/${id}`}>
      <a className={styles.container}>
        <MovieRating className={styles.rating} rating={rating} />
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image
              unoptimized
              layout="fill"
              src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`}
              alt={description}
            />
          </div>
          <div className={styles.text}>
            <span className={styles.title}>
              {title ? title : alternativeName}
            </span>
            <span className={styles.info}>
              {year}
              {movieLength && `, ${movieLength} мин.`}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
