import { Box, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
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
            <ChakraLink color="twitter.400">Berezhnev Vladimir</ChakraLink>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
