import { Box, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Box>
      <footer className={styles.footer}>
        <Box
          backgroundImage="url('./images/footer-bg.jpg')"
          paddingBlock="80px 50px"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <div className={styles.container}>
            <div className={styles.footerBrandWrapper}>
              <a href="./index.html" className={styles.logo}>
                <img src="./assets/images/logo.svg" alt="Kinoway logo" />
              </a>
              <ul className={styles.footerList}>
                <li>
                  <a href="./index.html" className={styles.footerLink}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Movie
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    TV Show
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Web Series
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.divider} />
            <div className={styles.quicklinkWrapper}>
              <ul className={styles.quicklinkList}>
                <li>
                  <a href="#" className={styles.quicklinkLink}>
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.quicklinkLink}>
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.quicklinkLink}>
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.quicklinkLink}>
                    Privacy
                  </a>
                </li>
              </ul>
              <ul className={styles.socialList}>
                <li>
                  <a href="#" className={styles.socialLink}>
                    {/* <ion-icon name="logo-facebook" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink}>
                    {/* <ion-icon name="logo-twitter" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink}>
                    {/* <ion-icon name="logo-pinterest" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.socialLink}>
                    {/* <ion-icon name="logo-linkedin" /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </footer>

      <Box>
        <Box
          textAlign="center"
          p="3px"
          backgroundColor="gray.900"
          color="white"
          bottom="0px"
          width="100%"
          zIndex="999"
        >
          <Text mt="20px" mb="20px">
            Made with 🫀 by{" "}
            <Link href="https://berezhnev.vercel.app">
              <ChakraLink
                href="https://berezhnev.netlify.app"
                color="twitter.400"
              >
                Berezhnev Vladimir
              </ChakraLink>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
