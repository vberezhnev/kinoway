import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import styles from "./Layout.module.scss";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className={styles.layoutContainer}>
      <Header position="fixed" style={{ zIndex: 10 }} />
      <Box mt={24}>
        <main>{children}</main>
      </Box>
      <Footer />
    </div>
  );
};
