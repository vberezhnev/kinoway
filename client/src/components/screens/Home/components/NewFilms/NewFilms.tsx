// Next.js
import { useRouter } from "next/router";

import { useGetNewFilmsQuery } from "@/services/KinowayService";
import { RoutesEnum } from "@/constants/routes";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

//import Sidebar from "../UI-components/Sidebar/Sidebar";
import FilmCard from "@/components/FilmCard/FilmCard";
import Button from "@/components/UI-components/Button/Button";

import styles from "./NewFilms.module.scss";

interface Data {
  id: number;
  rating: object;
  kp: number;
  imdb: number;
  poster: object;
}

export const NewFilms = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewFilmsQuery(filmsLimit);
  const { loadMoreFilms } = useActions();
  const condition = data?.docs?.length === data?.total;

  return (
    <section className={styles.main}>
      <div>
        <div className={styles.NewMovies_top}>
          <h2>New films</h2>
          <Button text="View more" />
        </div>
        <ul>
          {data?.docs?.map((data: object | string | number) => {
            console.log(data);
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
