import { IMovie } from "@/types/IMovie";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "@/components/Carousel/Carousel";
import styles from "./RandomFilms.module.scss";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useGetNewSeriesQuery } from "@/services/KinowayService";

export const RandomFilms = () => {
    const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
    const { data, isFetching } = useGetNewSeriesQuery(filmsLimit);
    // const movieIds = randomMovies.map((movie) => movie.id);

    const randomInteger = (min: number, max: number) => {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    };

    console.log(randomInteger(342, 507000));

    return (
        <div className={styles.container}>
            <Carousel title="Случайное кино" quantity={4}>
                {/* {movies?.map((data) => {
                    console.log(data);
                    console.log("here");
                    return (
                        <SwiperSlide key={data.id}>
                            <FilmCard item={data} />
                        </SwiperSlide>
                    );
										})} */}
            </Carousel>
        </div>
    );
};
