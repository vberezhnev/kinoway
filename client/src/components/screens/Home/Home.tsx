import type { NextPage } from "next";
import React from "react";
// import Snowfall from "react-snowfall";

import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";
import { RandomFilms } from "@/components/screens/Home/components/RandomFilms/RandomFilms";
/* import { FilmCard } from "@/components/FilmCard/FilmCard"; */

/* import styles from "./Home.module.scss"; */
import "./Home.scss";

const Home: NextPage = () => {
  /* return (
   *   <div className={styles.container}>
   *     <RandomFilms />
   *     <NewFilms />
   *     <NewSeries />
   *   </div>
   * ); */

  return (
    <div>
      {/* 
    - #HEADER
  */}
      {/* <header className="header" data-header>
						<div className="container">
						<div className="overlay" data-overlay />
						<a href="./index.html" className="logo">
            <img src="./assets/images/logo.svg" alt="Kinoway logo" />
						</a>
						<div className="header-actions">
            <button className="search-btn">
            <ion-icon name="search-outline" />
            </button>
            <div className="lang-wrapper">
            <label htmlFor="language">
            <ion-icon name="globe-outline" />
            </label>
            <select name="language" id="language">
            <option value="en">EN</option>
            <option value="au">AU</option>
            <option value="ar">AR</option>
            <option value="tu">TU</option>
            </select>
            </div>
            <button className="btn btn-primary">Sign in</button>
						</div>
						<button className="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two" />
						</button>
						<nav className="navbar" data-navbar>
            <div className="navbar-top">
            <a href="./index.html" className="logo">
            <img src="./assets/images/logo.svg" alt="Kinoway logo" />
            </a>
            <button className="menu-close-btn" data-menu-close-btn>
            <ion-icon name="close-outline" />
            </button>
            </div>
            <ul className="navbar-list">
            <li>
            <a href="./index.html" className="navbar-link">
            Home
            </a>
            </li>
            <li>
            <a href="#" className="navbar-link">
            Movie
            </a>
            </li>
            <li>
            <a href="#" className="navbar-link">
            Tv Show
            </a>
            </li>
            <li>
            <a href="#" className="navbar-link">
            Web Series
            </a>
            </li>
            <li>
            <a href="#" className="navbar-link">
            Pricing
            </a>
            </li>
            </ul>
            <ul className="navbar-social-list">
            <li>
            <a href="#" className="navbar-social-link">
            <ion-icon name="logo-twitter" />
            </a>
            </li>
            <li>
            <a href="#" className="navbar-social-link">
            <ion-icon name="logo-facebook" />
            </a>
            </li>
            <li>
            <a href="#" className="navbar-social-link">
            <ion-icon name="logo-pinterest" />
            </a>
            </li>
            <li>
            <a href="#" className="navbar-social-link">
            <ion-icon name="logo-instagram" />
            </a>
            </li>
            <li>
            <a href="#" className="navbar-social-link">
            <ion-icon name="logo-youtube" />
            </a>
            </li>
            </ul>
						</nav>
						</div>
						</header> */}
      <main>
        <article>
          {/* 
        - #HERO
      */}
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Kinoway</p>
                <h1 className="h1 hero-title">
                  Unlimited <strong>Movie</strong>, TVs Shows, &amp; More.
                </h1>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG 18</div>
                    <div className="badge badge-outline">HD</div>
                  </div>
                  <div className="ganre-wrapper">
                    <a href="#">Romance,</a>
                    <a href="#">Drama</a>
                  </div>
                  <div className="date-time">
                    <div>
                      <ion-icon name="calendar-outline" />
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div>
                      <ion-icon name="time-outline" />
                      <time dateTime="PT128M">128 min</time>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">
                  <ion-icon name="play" />
                  <span>Watch now</span>
                </button>
              </div>
            </div>
          </section>
          {/* 
        - #UPCOMING
      */}
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
                  {/* <div className="movie-card">
												<a href="./movie-details.html">
												<figure className="card-banner">
                        <img
                        src="./assets/images/upcoming-1.png"
                        alt="The Northman movie poster"
                        />
												</figure>
												</a>
												<div className="title-wrapper">
												<a href="./movie-details.html">
                        <h3 className="card-title">The Northman</h3>
												</a>
												<time dateTime={2022}>2022</time>
												</div>
												<div className="card-meta">
												<div className="badge badge-outline">HD</div>
												<div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT137M">137 min</time>
												</div>
												<div className="rating">
                        <ion-icon name="star" />
                        <data>8.5</data>
												</div>
												</div>
												</div>
												</li>
												<li>
												<div className="movie-card">
												<a href="./movie-details.html">
												<figure className="card-banner">
                        <img
                        src="./assets/images/upcoming-2.png"
                        alt="Doctor Strange in the Multiverse of Madness movie poster"
                        />
												</figure>
												</a>
												<div className="title-wrapper">
												<a href="./movie-details.html">
                        <h3 className="card-title">
                        Doctor Strange in the Multiverse of Madness
                        </h3>
												</a>
												<time dateTime={2022}>2022</time>
												</div>
												<div className="card-meta">
												<div className="badge badge-outline">4K</div>
												<div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT126M">126 min</time>
												</div>
												<div className="rating">
                        <ion-icon name="star" />
                        <data>NR</data>
												</div>
												</div>
												</div>
												</li>
												<li>
												<div className="movie-card">
												<a href="./movie-details.html">
												<figure className="card-banner">
                        <img
                        src="./assets/images/upcoming-3.png"
                        alt="Memory movie poster"
                        />
												</figure>
												</a>
												<div className="title-wrapper">
												<a href="./movie-details.html">
                        <h3 className="card-title">Memory</h3>
												</a>
												<time dateTime={2022}>2022</time>
												</div>
												<div className="card-meta">
												<div className="badge badge-outline">2K</div>
												<div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime>N/A</time>
												</div>
												<div className="rating">
                        <ion-icon name="star" />
                        <data>NR</data>
												</div>
												</div>
												</div>
												</li>
												<li>
												<div className="movie-card">
												<a href="./movie-details.html">
												<figure className="card-banner">
                        <img
                        src="./assets/images/upcoming-4.png"
                        alt="The Unbearable Weight of Massive Talent movie poster"
                        />
												</figure>
												</a>
												<div className="title-wrapper">
												<a href="./movie-details.html">
                        <h3 className="card-title">
                        The Unbearable Weight of Massive Talent
                        </h3>
												</a>
												<time dateTime={2022}>2022</time>
												</div>
												<div className="card-meta">
												<div className="badge badge-outline">HD</div>
												<div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT107M">107 min</time>
												</div>
												<div className="rating">
                        <ion-icon name="star" />
                        <data>NR</data>
												</div>
												</div>
												</div> */}
                </li>
              </ul>
            </div>
          </section>
          {/* 
        - #SERVICE
      */}
          <section className="service">
            <div className="container">
              <div className="service-banner">
                <figure>
                  <img
                    src="./assets/images/service-banner.jpg"
                    alt="HD 4k resolution! only $3.99"
                  />
                </figure>
                <a
                  href="./assets/images/service-banner.jpg"
                  download
                  className="service-btn"
                >
                  <span>Download</span>
                  <ion-icon name="download-outline" />
                </a>
              </div>
              <div className="service-content">
                <p className="service-subtitle">Our Services</p>
                <h2 className="h2 service-title">
                  Download Your Shows Watch Offline.
                </h2>
                <p className="service-text">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod tempor.There are many variations of passages of lorem
                  Ipsum available, but the majority have suffered alteration in
                  some injected humour.
                </p>
                <ul className="service-list">
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <ion-icon name="tv" />
                      </div>
                      <div className="card-content">
                        <h3 className="h3 card-title">Enjoy on Your TV.</h3>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consecetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="service-card">
                      <div className="card-icon">
                        <ion-icon name="videocam" />
                      </div>
                      <div className="card-content">
                        <h3 className="h3 card-title">Watch Everywhere.</h3>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consecetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
              <ul className="movies-list">
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-1.png"
                          alt="Sonic the Hedgehog 2 movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Sonic the Hedgehog 2</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT122M">122 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>7.8</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-2.png"
                          alt="Morbius movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Morbius</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT104M">104 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>5.9</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-3.png"
                          alt="The Adam Project movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">The Adam Project</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT106M">106 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-4.png"
                          alt="Free Guy movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Free Guy</h3>
                      </a>
                      <time dateTime={2021}>2021</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT115M">115 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>7.7</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-5.png"
                          alt="The Batman movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">The Batman</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT176M">176 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>7.9</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-6.png"
                          alt="Uncharted movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Uncharted</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT116M">116 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-7.png"
                          alt="Death on the Nile movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Death on the Nile</h3>
                      </a>
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT127M">127 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>6.5</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./movie-details.html">
                      <figure className="card-banner">
                        <img
                          src="./assets/images/movie-8.png"
                          alt="The King's Man movie poster"
                        />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">The King's Man</h3>
                      </a>
                      <time dateTime={2021}>2021</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT131M">131 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
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
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT47M">47 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
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
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <ion-icon name="time-outline" />
                        <time dateTime="PT59M">59 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
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
                      <time dateTime={2022}>2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        {/* <ion-icon name="time-outline" /> */}
                        <time dateTime="PT51M">51 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star" />
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
              <form action className="cta-form">
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
      {/* 
    - #FOOTER
  */}
      {/* 
    - #GO TO TOP
  */}
      <a href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up" />
      </a>
      {/* 
    - custom js link
  */}
      {/* 
    - ionicon link
  */}
    </div>
  );
};

export default Home;
