import { FC } from "react";
import { Button } from "../UI-components/Button/Button";

import styles from "./FilmsMore.module.scss";

const FilmsMore = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.NewMovies_top}>
          <div className={styles.films_type}>
            <h2>none</h2>
          </div>
          <div className={styles.button_load}>
            <Button text="View more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsMore;
