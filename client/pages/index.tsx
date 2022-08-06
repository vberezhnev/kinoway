import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import axios from "axios";

// Import components
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import FilmCard from "../components/FilmCard/FilmCard";
import Button from "../components/Button/Button";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.App}>
        {/* <div className={styles.sidebar}>
          <Sidebar />
        </div> */}

        <div className={styles.main}>
          <div>
            <div className={styles.NewMovies_top}>
              <h2>New films</h2>
              <Button text="View more"/>
            </div>
            <ul>
              <FilmCard />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
