import { useRouter } from "next/router";

import { useGetNewFilmsQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

import { FilmCard } from "@/components/FilmCard/FilmCard";
import MovieTop from "@/components/MovieTop/MovieTop";

import styles from "./NewFilms.module.scss";

export const NewFilms = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewFilmsQuery(filmsLimit);
  const { loadMoreFilms } = useActions();
  const condition = data?.docs?.length === data?.total;

  return (
    <section className={styles.main}>
      <div className={`${styles.NewFilms_container} container`}>
        <MovieTop header="New Films" buttonText="View more" />
        <ul className={styles.listFilmsContainer}>
          {data?.docs?.map((data: any) => {
            return (
              <ul key={data.id}>
                <FilmCard key={data.id} item={data} />
              </ul>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
