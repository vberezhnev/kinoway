import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
