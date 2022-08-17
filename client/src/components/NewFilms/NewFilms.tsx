// Next.js
import { useRouter } from "next/router";

import { useGetNewFilmsQuery } from "../../services/KinowayService";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RoutesEnum } from "../../constants/routes";
import { useActions } from "../../hooks/useActions";

//import Sidebar from "../UI-components/Sidebar/Sidebar";
import FilmCard from "../FilmCard/FilmCard";
import Button from "../UI-components/Button/Button";

import styles from "./NewFilms.module.scss";

const NewFilms = () => {
  const { push } = useRouter();
  const { filmsLimit } = useTypedSelector((state) => state.loadReducer);
  const { data, isFetching } = useGetNewFilmsQuery(filmsLimit);
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
          {data?.docs?.map((data) => {
            console.log(data);
            return (
              <FilmCard
                key="1"
                href="123"
                src="123"
                title="123"
                secondTitle="123"
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewFilms;
