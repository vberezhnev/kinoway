import type { NextPage } from "next";
import * as React from "react";
import Snowfall from 'react-snowfall'

import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
			<div className={styles.container}>
					<Snowfall />
      <div className={styles.App}>
        <NewFilms />
        <NewSeries />
      </div>
    </div>
  );
};

export default Home;
