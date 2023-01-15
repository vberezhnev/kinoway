import type { NextPage } from "next";
import React, { useState } from "react";
import Snowfall from "react-snowfall";

import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";
import { RandomFilms } from "@/components/screens/Home/components/RandomFilms/RandomFilms";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <RandomFilms />
            <NewFilms />
            <NewSeries />
        </div>
    );
};

export default Home;
