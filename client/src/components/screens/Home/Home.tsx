import type { NextPage } from "next";
import * as React from "react";

import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms"

import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <NewFilms />
      </div>
    </div>
  );
};

export default Home;
