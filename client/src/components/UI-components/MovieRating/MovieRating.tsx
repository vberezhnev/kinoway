import { IMovieRating } from "@/types/IMovie";
import { FC } from "react";
import styles from "./MovieRating.module.scss";

interface MovieRatingProps {
  rating: IMovieRating | undefined;
  className?: string;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating, className }) => {
  const isHighRating =
    Math.floor(Number(rating?.kp || rating?.imdb)) >= 6
      ? styles.green
      : styles.red;

  return (
    <>
      {rating && (
        <span className={`${styles.rating} ${isHighRating} ${className}`}>
          {Number(rating?.kp ? rating.kp : rating?.imdb).toFixed(1)}
        </span>
      )}
    </>
  );
};
