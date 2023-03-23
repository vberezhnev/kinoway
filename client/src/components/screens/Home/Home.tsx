import type { NextPage } from "next";
import React from "react";
// import Snowfall from "react-snowfall";

import { Hero } from "@/components/screens/Home/components/Hero/Hero";
import { Service } from "@/components/screens/Home/components/Service/Service";
import { CTA } from "@/components/screens/Home/components/CTA/CTA";
import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";
import { RandomFilms } from "@/components/screens/Home/components/RandomFilms/RandomFilms";

/* import styles from "./Home.module.scss"; */
import "./Home.scss";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <article>
          <Hero />

          <section className="upcoming">
            <div className="container">
              <div className="flex-wrapper">
                <div className="title-wrapper">
                  <p className="section-subtitle">Online Streaming</p>
                  <h2 className="h2 section-title">Upcoming Movies</h2>
                </div>
                <ul className="filter-list">
                  <li>
                    <button className="filter-btn">Movies</button>
                  </li>
                  <li>
                    <button className="filter-btn">TV Shows</button>
                  </li>
                  <li>
                    <button className="filter-btn">Anime</button>
                  </li>
                </ul>
              </div>
              <ul className="movies-list  has-scrollbar">
                <li>
                  <NewFilms />
                </li>
              </ul>
            </div>
          </section>

          <section className="service">
            <Service />
          </section>

          <section className="top-rated">
            <div className="container">
              <p className="section-subtitle">Online Streaming</p>
              <h2 className="h2 section-title">Top Rated Movies</h2>
              <ul className="filter-list">
                <li>
                  <button className="filter-btn">Movies</button>
                </li>
                <li>
                  <button className="filter-btn">TV Shows</button>
                </li>
                <li>
                  <button className="filter-btn">Documentary</button>
                </li>
                <li>
                  <button className="filter-btn">Sports</button>
                </li>
              </ul>
              <ul className="movies-list  has-scrollbar">
                <li>
                  <NewFilms />
                </li>
              </ul>
            </div>
          </section>
          {/* 
        - #TV SERIES
      */}
          <section className="tv-series">
            <NewSeries />
          </section>
          {/* 
        - #CTA
      */}
          <section className="cta">
            <CTA />
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
