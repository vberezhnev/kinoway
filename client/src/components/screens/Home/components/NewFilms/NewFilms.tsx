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

export const NewFilms = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewFilmsQuery(filmsLimit);
  const { loadMoreFilms } = useActions();
  const condition = data?.docs?.length === data?.total;

  return (
    <section className={styles.main}>
      <div className={`${styles.NewFilms_container} container`}>
        <div className={styles.NewFilms_top}>
          <h2>New films</h2>
          <Button text="View more" />
        </div>
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
