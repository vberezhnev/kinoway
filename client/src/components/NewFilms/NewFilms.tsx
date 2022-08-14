import Sidebar from "../UI-components/Sidebar/Sidebar";
import FilmCard from "../FilmCard/FilmCard";
import Button from "../UI-components/Button/Button";

import styles from './NewFilms.module.scss'

const NewFilms = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.NewMovies_top}>
          <h2>New films</h2>
          <Button text="View more" />
        </div>
        <ul>
          <FilmCard />
        </ul>
      </div>
    </div>
  );
};

export default NewFilms