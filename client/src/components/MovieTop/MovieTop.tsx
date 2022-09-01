import Button from "@/components/UI-components/Button/Button";

import styles from "./MovieTop.module.scss";

interface IMovieTop {
  header: string;
  buttonText: string;
}

const MovieTop = (props: IMovieTop) => {
  return (
    <div className={styles.NewMovies_top}>
      <h1>{props.header}</h1>
      <Button text={props.buttonText} />
    </div>
  );
};

export default MovieTop;
