// Next.js
import { useRouter } from "next/router";

import { useGetNewFilmsQuery } from "@/services/KinomoreService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { RoutesEnum } from "@/constants/routes";
import { useActions } from "@/hooks/useActions";

import Sidebar from "@/compoenents/UI-components/Sidebar/Sidebar";
import FilmCard from "@/components/FilmCard/FilmCard";
import Button from "@/components/UI-components/Button/Button";

import styles from "./NewFilms.module.scss";

const NewFilms = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewFilmsQuery(10);
  const { loadMoreFilms } = useActions();
  const condition = data?.docs?.length === data?.total;

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.NewMovies_top}>
          <h2>New films</h2>
          <Button text="View more" />
        </div>
        <ul>
          {data?.docs?.map((el) => (
            <FilmCard key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewFilms;
