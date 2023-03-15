// Next.js
import { useRouter } from "next/router";

import { useGetNewSeriesQuery } from "@/services/KinowayService";
import { RoutesEnum } from "@/constants/routes";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

import { FilmCard } from "@/components/FilmCard/FilmCard";
import MovieTop from "../../../../MovieTop/MovieTop";

import styles from "./NewSeries.module.scss";

export const NewSeries = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewSeriesQuery(filmsLimit);
  const { loadMoreFilms } = useActions();
  const condition = data?.docs?.length === data?.total;

  return (
    <section className={styles.main}>
      <div className={`${styles.NewSeries_container} container`}>
        <MovieTop header="New series" buttonText="View more" />
        <ul className={styles.listSeriesContainer}>
          {data?.docs?.map((data: any) => {
            return (
              <ul key={data.id}>
                <FilmCard item={data} />
              </ul>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
