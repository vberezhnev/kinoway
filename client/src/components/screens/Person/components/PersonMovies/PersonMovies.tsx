import { FC } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { IMovie } from "@/types/IMovie";
import { SwiperSlide } from "swiper/react";
import { FilmCard } from "@/components/FilmCard/FilmCard";
import styles from "./PersonMovies.module.scss";

interface PersonMoviesProps {
  movies: IMovie[] | undefined;
}

export const PersonMovies: FC<PersonMoviesProps> = ({ movies }) => {
  return (
    <div className={styles.container}>
      <Carousel title="Фильмы и сериалы" quantity={movies?.length}>
        {movies?.map((data, idx) => {
          const { ...item } = data;
          console.log(item);

          return (
            <SwiperSlide className={styles.item} key={idx}>
              <FilmCard item={item} />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </div>
  );
};
