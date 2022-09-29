import { IMovie } from "@/types/IMovie";
import { FC } from "react";
//import {Rating} from "@/components/Rating/Rating";
import Link from "next/link";
import styles from "./SearchItem.module.scss";
import Image from "next/image";

interface SearchItemProps {
  item: IMovie;
}

export const SearchItem: FC<SearchItemProps> = ({ item }) => {
  const {
    title,
    id,
    poster,
    description,
    year,
    alternativeName,
    movieLength,
    rating,
  } = item;

  return (
    <Link href={`/film/${id}`}>
      <a className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            {/*<Image
              unoptimized
              layout="fill"
              src={poster.previewUrl ? poster.previewUrl : null}
              alt={description}
							/>*/}
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
        {/* <Rating className={styles.rating} rating={rating} /> */}
      </a>
    </Link>
  );
};
