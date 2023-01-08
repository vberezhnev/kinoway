import type { NextPage } from "next";
import React, { useState } from "react";
import Snowfall from "react-snowfall";

import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";
import { RandomFilms } from "@/components/screens/Home/components/RandomFilms/RandomFilms";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
    const [snowOn, setSnowOn] = useState(true);

    return (
        <div className={styles.container}>
            <div className={styles.App}>
                {snowOn ? (
                    <Snowfall
                        snowflakeCount={200}
                        style={{
                            height: "100%",
                        }}
                    />
                ) : null}
                <button onClick={() => setSnowOn(!snowOn)}>Toggle Snow</button>
                {/* <RandomFilms /> */}
                <NewFilms />
                <NewSeries />
            </div>
        </div>
    );
};

export default Home;
