import { FC } from "react";
import { IMovie } from "@/types/IMovie";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/components/Carousel/Carousel";
import FilmCard from "@/components/FilmCard/FilmCard";
import styles from "./SimilarMovies.module.scss";

interface SimilarMoviesProps {
  movies: IMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({ movies }) => {
  return (
    <div className={styles.container}>
      <Carousel title="Похожее кино" quantity={movies?.length}>
        {movies?.map((data) => {
          console.log(movies);
          return (
            <SwiperSlide key={data.id}>
              <FilmCard item={data} />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </div>
  );
};
