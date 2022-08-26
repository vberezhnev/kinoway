import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "@/types/IMovie";

import styles from "./FilmCard.module.scss";

interface FilmItemProps {
  item: IMovie;
}

const FilmCard: FC<FilmItemProps> = ({ item }) => {
  const { id, poster, description, year, name, names, type, rating } = {
    ...item,
  };

  return (
    <Link href={`/film/${id}`}>
      <li className={styles.FilmCard_item}>
        <div className={styles.FilmCard_top}>
          <div className={styles.filmImageContainer}>
            <div>
              <span className={styles.ratingKP}>
                <p>KP: {rating?.kp}</p>
              </span>
              <span className={styles.ratingIMDB}>
                <p>IMDb: {rating?.imdb}</p>
              </span>
            </div>
            <Image
              className={styles.filmImage}
              src={poster?.previewUrl}
              width="222px"
              height="333px"
            />
          </div>
        </div>

        <h3 className={styles.FilmCard_title}>{name}</h3>
        <br />
        <a className={styles.FilmCard_secondTitle}>{names[1]?.name}</a>

        <br />
        <span className={styles.FilmCard_info}>2022, фильм</span>
      </li>
    </Link>
  );
};

export default FilmCard;
