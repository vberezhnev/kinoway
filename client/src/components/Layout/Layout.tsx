import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

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
