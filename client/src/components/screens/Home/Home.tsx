import type { NextPage } from "next";
import React from "react";
// import Snowfall from "react-snowfall";

import { NewFilms } from "@/components/screens/Home/components/NewFilms/NewFilms";
import { NewSeries } from "@/components/screens/Home/components/NewSeries/NewSeries";
import { RandomFilms } from "@/components/screens/Home/components/RandomFilms/RandomFilms";

/* import styles from "./Home.module.scss"; */
import * as styles from "./test.module.css";

const Home: NextPage = () => {
    /* return (
     *   <div className={styles.container}>
     *     <RandomFilms />
     *     <NewFilms />
     *     <NewSeries />
     *   </div>
     * ); */

    return (
        <body id="top">
            <header className={styles.header} data-header>
                <div className={styles.container}>
                    <div className={styles.overlay} data-overlay></div>

                    <a href="./index.html" className={styles.logo}>
                        <img src="./assets/images/logo.svg" alt="Filmlane logo" />
                    </a>

                    <div className={styles.header - actions}>
                        <button className={styles.search - btn}>
                            {/* <ion-icon name="search-outline"></ion-icon> */}
                        </button>

                        <div className={styles.lang - wrapper}>
                            <label htmlFor="language">
                                {/* <ion-icon name="globe-outline"></ion-icon> */}
                            </label>

                            <select name="language" id="language">
                                <option value="en">EN</option>
                                <option value="au">AU</option>
                                <option value="ar">AR</option>
                                <option value="tu">TU</option>
                            </select>
                        </div>

                        <button className={`${styles.btn} ${btn - primary}`}>Sign in</button>
                    </div>

                    <button className={styles.menu - open - btn} data-menu-open-btn>
                        {/* <ion-icon name="reorder-two"></ion-icon> */}
                    </button>

                    <nav className={styles.navbar} data-navbar>
                        <div className={styles.navbar - top}>
                            <a href="./index.html" className={styles.logo}>
                                <img src="./assets/images/logo.svg" alt="Filmlane logo" />
                            </a>

                            <button className={styles.menu - close - btn} data-menu-close-btn>
                                {/* <ion-icon name="close-outline"></ion-icon> */}
                            </button>
                        </div>

                        <ul className={styles.navbar - list}>
                            <li>
                                <a href="./index.html" className={styles.navbar - link}>
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - link}>
                                    Movie
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - link}>
                                    Tv Show
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - link}>
                                    Web Series
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - link}>
                                    Pricing
                                </a>
                            </li>
                        </ul>

                        <ul className={styles.navbar - social - list}>
                            <li>
                                <a href="#" className={styles.navbar - social - link}>
                                    {/* <ion-icon name="logo-twitter"></ion-icon> */}
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - social - link}>
                                    {/* <ion-icon name="logo-facebook"></ion-icon> */}
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - social - link}>
                                    {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - social - link}>
                                    {/* <ion-icon name="logo-instagram"></ion-icon> */}
                                </a>
                            </li>

                            <li>
                                <a href="#" className={styles.navbar - social - link}>
                                    {/* <ion-icon name="logo-youtube"></ion-icon> */}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <article>
                    <section className={styles.hero}>
                        <div className={styles.container}>
                            <div className={styles.hero - content}>
                                <p className={styles.hero - subtitle}>Filmlane</p>

                                <h1 className={styles.h1 hero-title}>
                                Unlimited <strong>Movie</strong>, TVs Shows, & More.
                            </h1>

                            <div className={styles.meta - wrapper}>
                                <div className={styles.badge - wrapper}>
                                    <div className={styles.badge badge-fill}>PG 18</div>

                                <div className={styles.badge badge-outline}>HD</div>
                        </div>

                        <div className={styles.ganre - wrapper}>
                            <a href="#">Romance,</a>

                            <a href="#">Drama</a>
                        </div>

                        <div className={styles.date - time}>
                            <div>
                                {/* <ion-icon name="calendar-outline"></ion-icon> */}

                                <time dateTime="2022">2022</time>
                            </div>

                            <div>
                                <ion-icon name="time-outline"></ion-icon>

                                <time dateTime="PT128M">128 min</time>
                            </div>
                        </div>
                    </div>

                    <button className={styles.btn btn-primary}>
                    {/* <ion-icon name="play"></ion-icon> */}

                    <span>Watch now</span>
                </button>
            </div>
        </div >
          </section >

          <section className={ styles.upcoming}>
            <div className={ styles.container}>
              <div className={ styles.flex-wrapper}>
                <div className={ styles.title-wrapper}>
                  <p className={ styles.section-subtitle}>Online Streaming</p>

                  <h2 className={ styles.h2 section-title}>Upcoming Movies</h2>
                </div>

                <ul className={ styles.filter-list}>
                  <li>
                    <button className={ styles.filter-btn}>Movies</button>
                  </li>

                  <li>
                    <button className={ styles.filter-btn}>TV Shows</button>
                  </li>

                  <li>
                    <button className={ styles.filter-btn}>Anime</button>
                  </li>
                </ul>
              </div>

              <ul className={ styles.movies-list  has-scrollbar}>
                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/upcoming-1.png"
                          alt="The Northman movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>The Northman</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>HD</div>

                      <div className={ styles.duration}>
                        {/* <ion-icon name="time-outline"></ion-icon> */}

                        <time dateTime="PT137M">137 min</time>
                      </div>

                      <div className={ styles.rating}>
                        {/* <ion-icon name="star"></ion-icon> */}

                        <data>8.5</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/upcoming-2.png"
                          alt="Doctor Strange in the Multiverse of Madness movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>
                          Doctor Strange in the Multiverse of Madness
                        </h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>4K</div>

                      <div className={ styles.duration}>
                        {/* <ion-icon name="time-outline"></ion-icon> */}

                        <time dateTime="PT126M">126 min</time>
                      </div>

                      <div className={ styles.rating}>
                        {/* <ion-icon name="star"></ion-icon> */}

                        <data>NR</data>
                      </div>
                    </div>
                  </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/upcoming-3.png"
                        alt="Memory movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>Memory</h3>
                </a>

                <time dateTime="2022">2022</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>2K</div>

            <div className={styles.duration}>
                {/* <ion-icon name="time-outline"></ion-icon> */}

                <time dateTime="">N/A</time>
            </div>

            <div className={styles.rating}>
                {/* <ion-icon name="star"></ion-icon> */}

                <data>NR</data>
            </div>
        </div>
    </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/upcoming-4.png"
                        alt="The Unbearable Weight of Massive Talent movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>
                        The Unbearable Weight of Massive Talent
                    </h3>
                </a>

                <time dateTime="2022">2022</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>HD</div>

            <div className={styles.duration}>
                {/* <ion-icon name="time-outline"></ion-icon> */}

                <time dateTime="PT107M">107 min</time>
            </div>

            <div className={styles.rating}>
                {/* <ion-icon name="star"></ion-icon> */}

                <data>NR</data>
            </div>
        </div>
    </div>
                </li >
              </ul >
            </div >
          </section >

    <section className={styles.service}>
        <div className={styles.container}>
            <div className={styles.service - banner}>
                <figure>
                    <img
                        src="./assets/images/service-banner.jpg"
                        alt="HD 4k resolution! only $3.99"
                    />
                </figure>

                <a
                    href="./assets/images/service-banner.jpg"
                    download
                    className={styles.service - btn}
                >
                    <span>Download</span>

                    <ion-icon name="download-outline"></ion-icon>
                </a>
            </div>

            <div className={styles.service - content}>
                <p className={styles.service - subtitle}>Our Services</p>

                <h2 className={styles.h2 service-title}>
                Download Your Shows Watch Offline.
            </h2>

            <p className={styles.service - text}>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod tempor.There are many variations of passages of lorem
                Ipsum available, but the majority have suffered alteration in
                some injected humour.
            </p>

            <ul className={styles.service - list}>
                <li>
                    <div className={styles.service - card}>
                        <div className={styles.card - icon}>
                            <ion-icon name="tv"></ion-icon>
                        </div>

                        <div className={styles.card - content}>
                            <h3 className={styles.h3 card-title}>Enjoy on Your TV.</h3>

                        <p className={styles.card - text}>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
            </li>

            <li>
                <div className={styles.service - card}>
                    <div className={styles.card - icon}>
                        <ion-icon name="videocam"></ion-icon>
                    </div>

                    <div className={styles.card - content}>
                        <h3 className={styles.h3 card-title}>Watch Everywhere.</h3>

                    <p className={styles.card - text}>
                        Lorem ipsum dolor sit amet, consecetur adipiscing
                        elit, sed do eiusmod tempor.
                    </p>
                </div>
        </div>
    </li>
                </ul >
              </div >
            </div >
          </section >

          <section className={ styles.top-rated}>
            <div className={ styles.container}>
              <p className={ styles.section-subtitle}>Online Streaming</p>

              <h2 className={ styles.h2 section-title}>Top Rated Movies</h2>

              <ul className={ styles.filter-list}>
                <li>
                  <button className={ styles.filter-btn}>Movies</button>
                </li>

                <li>
                  <button className={ styles.filter-btn}>TV Shows</button>
                </li>

                <li>
                  <button className={ styles.filter-btn}>Documentary</button>
                </li>

                <li>
                  <button className={ styles.filter-btn}>Sports</button>
                </li>
              </ul>

              <ul className={ styles.movies-list}>
                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/movie-1.png"
                          alt="Sonic the Hedgehog 2 movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>Sonic the Hedgehog 2</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>2K</div>

                      <div className={ styles.duration}>
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT122M">122 min</time>
                      </div>

                      <div className={ styles.rating}>
                        <ion-icon name="star"></ion-icon>

                        <data>7.8</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/movie-2.png"
                          alt="Morbius movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>Morbius</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>HD</div>

                      <div className={ styles.duration}>
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT104M">104 min</time>
                      </div>

                      <div className={ styles.rating}>
                        <ion-icon name="star"></ion-icon>

                        <data>5.9</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/movie-3.png"
                          alt="The Adam Project movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>The Adam Project</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>4K</div>

                      <div className={ styles.duration}>
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT106M">106 min</time>
                      </div>

                      <div className={ styles.rating}>
                        <ion-icon name="star"></ion-icon>

                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/movie-4.png"
                        alt="Free Guy movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>Free Guy</h3>
                </a>

                <time dateTime="2021">2021</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>4K</div>

            <div className={styles.duration}>
                <ion-icon name="time-outline"></ion-icon>

                <time dateTime="PT115M">115 min</time>
            </div>

            <div className={styles.rating}>
                <ion-icon name="star"></ion-icon>

                <data>7.7</data>
            </div>
        </div>
    </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/movie-5.png"
                        alt="The Batman movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>The Batman</h3>
                </a>

                <time dateTime="2022">2022</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>4K</div>

            <div className={styles.duration}>
                <ion-icon name="time-outline"></ion-icon>

                <time dateTime="PT176M">176 min</time>
            </div>

            <div className={styles.rating}>
                <ion-icon name="star"></ion-icon>

                <data>7.9</data>
            </div>
        </div>
    </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/movie-6.png"
                        alt="Uncharted movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>Uncharted</h3>
                </a>

                <time dateTime="2022">2022</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>HD</div>

            <div className={styles.duration}>
                <ion-icon name="time-outline"></ion-icon>

                <time dateTime="PT116M">116 min</time>
            </div>

            <div className={styles.rating}>
                <ion-icon name="star"></ion-icon>

                <data>7.0</data>
            </div>
        </div>
    </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/movie-7.png"
                        alt="Death on the Nile movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>Death on the Nile</h3>
                </a>

                <time dateTime="2022">2022</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>2K</div>

            <div className={styles.duration}>
                <ion-icon name="time-outline"></ion-icon>

                <time dateTime="PT127M">127 min</time>
            </div>

            <div className={styles.rating}>
                <ion-icon name="star"></ion-icon>

                <data>6.5</data>
            </div>
        </div>
    </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/movie-8.png"
                        alt="The King's Man movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>The King's Man</h3>
                </a>

                <time dateTime="2021">2021</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>HD</div>

            <div className={styles.duration}>
                <ion-icon name="time-outline"></ion-icon>

                <time dateTime="PT131M">131 min</time>
            </div>

            <div className={styles.rating}>
                <ion-icon name="star"></ion-icon>

                <data>7.0</data>
            </div>
        </div>
    </div>
                </li >
              </ul >
            </div >
          </section >

          <section className={ styles.tv-series}>
            <div className={ styles.container}>
              <p className={ styles.section-subtitle}>Best TV Series</p>

              <h2 className={ styles.h2 section-title}>World Best TV Series</h2>

              <ul className={ styles.movies-list}>
                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/series-1.png"
                          alt="Moon Knight movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>Moon Knight</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>2K</div>

                      <div className={ styles.duration}>
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT47M">47 min</time>
                      </div>

                      <div className={ styles.rating}>
                        <ion-icon name="star"></ion-icon>

                        <data>8.6</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/series-2.png"
                          alt="Halo movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>Halo</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>2K</div>

                      <div className={ styles.duration}>
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT59M">59 min</time>
                      </div>

                      <div className={ styles.rating}>
                        <ion-icon name="star"></ion-icon>

                        <data>8.8</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={ styles.movie-card}>
                    <a href="./movie-details.html">
                      <figure className={ styles.card-banner}>
                        <img
                          src="./assets/images/series-3.png"
                          alt="Vikings: Valhalla movie poster"
                        />
                      </figure>
                    </a>

                    <div className={ styles.title-wrapper}>
                      <a href="./movie-details.html">
                        <h3 className={ styles.card-title}>Vikings: Valhalla</h3>
                      </a>

                      <time dateTime="2022">2022</time>
                    </div>

                    <div className={ styles.card-meta}>
                      <div className={ styles.badge badge-outline}>2K</div>

                      <div className={ styles.duration}>
                        <ion-icon name="time-outline"></ion-icon>

                        <time dateTime="PT51M">51 min</time>
                      </div>

                      <div className={ styles.rating}>
                        <ion-icon name="star"></ion-icon>

                        <data>8.3</data>
                      </div>
                    </div>
                  </div>
                </li >

    <li>
        <div className={styles.movie - card}>
            <a href="./movie-details.html">
                <figure className={styles.card - banner}>
                    <img
                        src="./assets/images/series-4.png"
                        alt="Money Heist movie poster"
                    />
                </figure>
            </a>

            <div className={styles.title - wrapper}>
                <a href="./movie-details.html">
                    <h3 className={styles.card - title}>Money Heist</h3>
                </a>

                <time dateTime="2017">2017</time>
            </div>

            <div className={styles.card - meta}>
                <div className={styles.badge badge-outline}>4K</div>

            <div className={styles.duration}>
                {/* <ion-icon name="time-outline"></ion-icon> */}

                <time dateTime="PT70M">70 min</time>
            </div>

            <div className={styles.rating}>
                {/* <ion-icon name="star"></ion-icon> */}

                <data>8.3</data>
            </div>
        </div>
    </div>
                </li >
              </ul >
            </div >
          </section >

    <section className={styles.cta}>
        <div className={styles.container}>
            <div className={styles.title - wrapper}>
                <h2 className={styles.cta - title}>Trial start first 30 days.</h2>

                <p className={styles.cta - text}>
                    Enter your email to create or restart your membership.
                </p>
            </div>

            <form action="" className={styles.cta - form}>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className={styles.email - field}
                />

                <button type="submit" className={styles.cta - form - btn}>
                    Get started
                </button>
            </form>
        </div>
    </section>
        </article >
      </main >

      <footer className={ styles.footer}>
        <div className={ styles.footer-top}>
          <div className={ styles.container}>
            <div className={ styles.footer-brand-wrapper}>
              <a href="./index.html" className={ styles.logo}>
                <img src="./assets/images/logo.svg" alt="Filmlane logo" />
              </a>

              <ul className={ styles.footer-list}>
                <li>
                  <a href="./index.html" className={ styles.footer-link}>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.footer-link}>
                    Movie
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.footer-link}>
                    TV Show
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.footer-link}>
                    Web Series
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.footer-link}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className={ styles.divider}></div>

            <div className={ styles.quicklink-wrapper}>
              <ul className={ styles.quicklink-list}>
                <li>
                  <a href="#" className={ styles.quicklink-link}>
                    Faq
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.quicklink-link}>
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.quicklink-link}>
                    Terms of use
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.quicklink-link}>
                    Privacy
                  </a>
                </li>
              </ul>

              <ul className={ styles.social-list}>
                <li>
                  <a href="#" className={ styles.social-link}>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.social-link}>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.social-link}>
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className={ styles.social-link}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={ styles.footer-bottom}>
          <div className={ styles.container}>
            <p className={ styles.copyright}>
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>

            <img
              src="./assets/images/footer-bottom-img.png"
              alt="Online banking companies logo"
              className={ styles.footer-bottom-img}
            />
          </div>
        </div>
      </footer>

      <a href="#top" className={ styles.go-top} data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </a>

      <script src="./assets/js/script.js"></script>

{/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
								<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
    </body >
  );
};

export default Home;
