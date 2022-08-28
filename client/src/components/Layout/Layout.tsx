import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
