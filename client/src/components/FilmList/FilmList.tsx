import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "@/types/IMovie";
import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";

import styles from "./FilmList.module.scss";

interface FilmItemProps {
    item: IMovie;
}

const FilmList: FC<FilmItemProps> = ({ item }) => {
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
    }: any = {
        ...item,
    };

    console.log(poster);

    return (
        <div className={styles.styles_root}>
            <div>
                <Image
                    className={styles.image}
                    src={poster ? poster.previewUrl : "/public/vercel.svg"}
                    width={100}
                    height={160}
                />
            </div>

            <div className={styles.styles_content}>
                <div className={styles.main}>
                    <h3>
                        <Link className={styles.movieTitle} href={`/film/${id}`}>
                            {name}
                        </Link>
                    </h3>
                    <p className={styles.secondInfo}>
                        {alternativeName}, {year}
                    </p>
                </div>
                <div className={styles.user}>
                    <div className={styles.rating}>
                        <div className={styles.kinoway}>
                            <MovieRating rating={rating} className="kinowayValue" />
                            <span className={styles.kinowayValue}>{}</span>
                            <span className={styles.kinowayCount}>17 667</span>
                        </div>
                        <div className="styles">Топ 250: 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmList;
