
import styles from './Film.module.scss'
import styles from "./Film.module.scss";

const Film = () => {
  /* return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <BackButton />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.image}
              src={data?.poster?.url}
              alt={shortDescription}
            />
            <MovieRating className={styles.rating} rating={rating} />
          </div>
          <div className={styles.right}>
            <Title className={styles.title} variant="h1">
              {movieTitle} {movieYear}
            </Title>
            <span className={styles.originalTitle}>alternativeName</span>
            <div className={styles.btns}>
              <Button
                onClick={() => push(`/room/${data?.id}`)}
                className={styles.btn}
                variant="regular"
                disabled={isError}
                startIcon={<FiPlay />}
              >
                Смотреть
              </Button>
              <MovieFavorite
                className={styles.btn}
                variant="regular"
                id={data?.id}
                disabled={isError}
              />
            </div>
            <Title variant="h2" className={styles.subtitle}>
              О {convertMovieType(type)}е
            </Title>
            <Info items={items} />
          </div>
        </div>
        <Tabs tabs={tabs} />
        {similarMovies?.length ? (
          <SimilarMovies movies={similarMovies} />
        ) : null}
        <Reviews />
      </div>
    </section>
  ); */
};
