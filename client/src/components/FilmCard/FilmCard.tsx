import styles from "./FilmCard.module.scss";
import Link from "next/link";
import Image from "next/image";

const FilmCard = (props: string) => {
  return (
    <Link href={props.href}>
      <li className={styles.FilmCard_item}>
        <div className={styles.FilmCard_top}>
          <div className={styles.filmImageContainer}>
					<div>
          <span className={styles.ratingKP}><p>КП: {props.ratingKP}</p></span>
          <span className={styles.ratingIMDB}><p>IMDb: {props.ratingIMDB}</p></span>
					</div>
					<Image
              className={styles.filmImage}
              src={props.src}
              width="222px"
              height="333px"
            />
          </div>
        </div>

        <h3 className={styles.FilmCard_title}>{props.title}</h3>
        <br />
        <a className={styles.FilmCard_secondTitle}>{props.secondTitle}</a>

        <br />
        <span className={styles.FilmCard_info}>2022, фильм</span>
      </li>
    </Link>
  );
};

export default FilmCard
