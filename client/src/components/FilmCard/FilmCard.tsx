import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "@/types/IMovie";

import styles from "./FilmCard.module.scss";

interface FilmItemProps {
  item: IMovie;
}

const FilmCard: FC<FilmItemProps> = ({ item }) => {
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

  console.log(names);

  return (
    <Link href={`/film/${id}`}>
      <li className={styles.FilmCard_item}>
        <div className={styles.FilmCard_top}>
          <div className={styles.filmImageContainer}>
            <div>
              <span className={styles.ratingKP}>
                <p>IMDb: {rating?.imdb}</p>
              </span>
              <span className={styles.ratingIMDB}>
                <p>KP: {Math.round(rating?.kp * 10) / 10}</p>
              </span>
            </div>
            <div className={styles.imageContainer}>
              {poster && (
                <div
                  className={styles.image}
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    unoptimized
                    src={poster?.previewUrl}
                    alt={description}
                    layout="fill"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <h3 className={styles.FilmCard_title}>{name}</h3>
        <br />
        <p className={styles.FilmCard_secondTitle}>{alternativeName}</p>

        <br />
        <span className={styles.FilmCard_info}>
          {year}, {type}
        </span>
      </li>
    </Link>
  );
};

export default FilmCard;
