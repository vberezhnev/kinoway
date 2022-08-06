import styles from './FilmCard.module.scss'

const FilmCard = () => {
    return (
        <li className={styles.FilmCard_item}>
            <div className={styles.FilmCard_top}>
                <div>
                    <img className={styles.filmImage} src="https://st.kp.yandex.net/images/film_iphone/iphone360_590286.jpg" alt="" />
                </div>
                <span></span>
            </div>
            
            <a className={styles.FilmCard_title} href="">Бетмен</a>
            <br/>
            <span className={styles.FilmCard_info}>2022, фильм</span>
        </li>
    )
}

export default FilmCard