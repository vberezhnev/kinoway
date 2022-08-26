// Next.js
import { useRouter } from "next/router";

import { useGetNewSeriesQuery } from "@/services/KinowayService";
import { RoutesEnum } from "@/constants/routes";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

//import Sidebar from "../UI-components/Sidebar/Sidebar";
import FilmCard from "@/components/FilmCard/FilmCard";
import Button from "@/components/UI-components/Button/Button";

import styles from "./NewSeries.module.scss";

export const NewSeries = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewSeriesQuery(filmsLimit);
  const { loadMoreFilms } = useActions();
  const condition = data?.docs?.length === data?.total;

  return (
    <section className={styles.main}>
      <div>
        <div className={styles.NewSeries_top}>
          <h2>New series</h2>
          <Button text="View more" />
        </div>
        <ul>
          {data?.docs?.map((data: Object) => {
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
