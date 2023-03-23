import { Box, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box>
      <footer className="footer">
        <Box
          backgroundImage="url('./images/footer-bg.jpg')"
          paddingBlock="80px 50px"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <div className="container">
            <div className="footer-brand-wrapper">
              <a href="./index.html" className="logo">
                <img src="./assets/images/logo.svg" alt="Kinoway logo" />
              </a>
              <ul className="footer-list">
                <li>
                  <a href="./index.html" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Movie
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    TV Show
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Web Series
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="divider" />
            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <a href="#" className="quicklink-link">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">
                    Privacy
                  </a>
                </li>
              </ul>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-facebook" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-twitter" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-pinterest" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
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
            Made with love by{" "}
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
