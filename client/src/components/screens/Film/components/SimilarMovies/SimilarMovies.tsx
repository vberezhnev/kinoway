import { FC } from "react";
import { IMovie } from "@/types/IMovie";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/components/Carousel/Carousel";
import { FilmCard } from "@/components/FilmCard/FilmCard";
import styles from "./SimilarMovies.module.scss";
import { Box } from "@chakra-ui/react";

interface SimilarMoviesProps {
  movies: IMovie[] | undefined;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({ movies }) => {
  return (
    <div className={styles.container}>
      <Carousel title="Похожее кино" quantity={movies?.length}>
        {movies?.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <Box mr={3}>
                <FilmCard item={data} />
              </Box>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </div>
  );
};
