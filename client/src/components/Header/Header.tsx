import styles from "./Header.module.scss";
import variables from "../../styles/variables.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="#default" className={styles.logo}>
        <span>KINO</span>
        <span color={variables.primaryColor}>WAY</span>
      </a>

      <div className={styles.headerRight}>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Header;
