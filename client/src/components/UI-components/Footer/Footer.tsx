import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div>
            <footer className={styles.footerContainer}>
                <p className={styles.author}>
                    Made with love by <a href="https://berezhnev.vercel.app">Berezhnev</a>
                </p>
            </footer>
        </div>
    );
};
