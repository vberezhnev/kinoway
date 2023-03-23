import type { NextPage } from "next";
import React from "react";
// import Snowfall from "react-snowfall";

import { Hero } from "@/components/screens/Home/components/Hero/Hero";
import { Service } from "@/components/screens/Home/components/Service/Service";
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
          {/* 
        - #SERVICE
      */}
          <section className="service">
            <Service />
          </section>
          {/* 
        - #TOP RATED
      */}
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
            <div className="container">
              <p className="section-subtitle">Best TV Series</p>
              <h2 className="h2 section-title">World Best TV Series</h2>
              <ul className="movies-list">
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/series-1.png"
                          alt="Moon Knight movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Moon Knight</h3>
                      </a>
                      <time dateTime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        {/* <ion-icon name="time-outline" /> */}
                        <time dateTime="PT47M">47 min</time>
                      </div>
                      <div className="rating">
                        {/* <ion-icon name="star" /> */}
                        <data>8.6</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/series-2.png"
                          alt="Halo movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Halo</h3>
                      </a>
                      <time dateTime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        {/* <ion-icon name="time-outline" /> */}
                        <time dateTime="PT59M">59 min</time>
                      </div>
                      <div className="rating">
                        {/* <ion-icon name="star" /> */}
                        <data>8.8</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/series-3.png"
                          alt="Vikings: Valhalla movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Vikings: Valhalla</h3>
                      </a>
                      <time dateTime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        {/* <ion-icon name="time-outline" /> */}
                        <time dateTime="PT51M">51 min</time>
                      </div>
                      <div className="rating">
                        {/* <ion-icon name="star" /> */}
                        <data>8.3</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/series-4.png"
                          alt="Money Heist movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Money Heist</h3>
                      </a>
                      <time dateTime="2017">2017</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        {/* <ion-icon name="time-outline" /> */}
                        <time dateTime="PT70M">70 min</time>
                      </div>
                      <div className="rating">
                        {/* <ion-icon name="star" /> */}
                        <data>8.3</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
        - #CTA
      */}
          <section className="cta">
            <div className="container">
              <div className="title-wrapper">
                <h2 className="cta-title">Trial start first 30 days.</h2>
                <p className="cta-text">
                  Enter your email to create or restart your membership.
                </p>
              </div>
              <form className="cta-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="email-field"
                />
                <button type="submit" className="cta-form-btn">
                  Get started
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
