import type { NextPage } from "next";
import * as React from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import FilmCard from "../../FilmCard/FilmCard";
import axios from "axios";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
  const [film, setFilm] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2017-2020&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res: any) => {
        setFilm(res.data.docs);
        console.log(film);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.App}>
        <ul className={styles.FilmContainer}>
          {film.map((value, id) => {
            return (
              <FilmCard
                key={id}
                href="https://google.com"
                title={film[id].name}
                src={film[id].poster.url}
              />
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
