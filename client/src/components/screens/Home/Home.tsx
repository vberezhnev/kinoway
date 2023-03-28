import type { NextPage } from "next";
import React from "react";
// import Snowfall from "react-snowfall";

import { Hero } from "@/components/screens/Home/components/Hero/Hero";
import { Service } from "@/components/screens/Home/components/Service/Service";
import { CTA } from "@/components/screens/Home/components/CTA/CTA";
import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";

import "./Home.scss";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <article>
          <Hero filmId="839458" />

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

          <section className="tv-series">
            <div className="container">
              <p className="section-subtitle">Best TV Series</p>
              <h2 className="h2 section-title">World Best TV Series</h2>
              <ul className="movies-list has-scrollbar">
                <li>
                  <NewSeries />
                </li>
              </ul>
            </div>
          </section>

          <section className="cta">
            <CTA />
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
