import styles from "./FilmCard.module.scss";
import Link from "next/link";
import Image from "next/image";

const FilmCard = (props: String) => {
  return (
    <Link href={props.href}>
      <li className={styles.FilmCard_item}>
        <div className={styles.FilmCard_top}>
          <div>
            <Image
              className={styles.filmImage}
              src={props.src}
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <span></span>
        </div>

        <a className={styles.FilmCard_title} href="">
          {props.title}
        </a>
        <br />
        <span className={styles.FilmCard_info}>2022, фильм</span>
      </li>
    </Link>
  );
};

export default FilmCard;
