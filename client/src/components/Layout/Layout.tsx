import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children, props }: any): JSX.Element => {
  return (
    <>
      <Header position="fixed" style={{ zIndex: 10 }} />
      <Box mt={32}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};
