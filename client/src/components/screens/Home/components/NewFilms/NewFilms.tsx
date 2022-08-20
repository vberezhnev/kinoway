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
      <div>
        <div className={styles.NewMovies_top}>
          <h2>New films</h2>
          <Button text="View more" />
        </div>
        <ul>
          {data?.docs?.map((data: Object) => {
            console.log(data);
							return (
							<ul>
								<FilmCard
										key={data.id}
										href={`https://kinopoisk.ru/series/${data.id}`}
										src={data.poster.previewUrl}
										title={data.name}
										secondTitle={data.alternativeName}
								/>
							</ul>
            );
          })}
        </ul>
      </div>
    </section>
  );
};