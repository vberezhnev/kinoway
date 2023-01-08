import { IMovie } from "@/types/IMovie";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/components/Carousel/Carousel";
import styles from "./RandomFilms.module.scss";

export const RandomFilms = () => {
    const { data, isFetching } = useGetNewSeriesQuery(filmsLimit);
    const randomMovies = data.sort(() => 0.5 - Math.random()).slice(0, 3);
    const movieIds = randomMovies.map((movie) => movie.id);

    return (
        <div className={styles.container}>
            <Carousel title="Случайное кино" quantity={4}>
                {movies?.map((data) => {
                    console.log(data);
                    console.log("here");
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
