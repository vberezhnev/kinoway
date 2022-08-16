import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import axios from "axios";

import Home from "@/components/screens/Home/Home";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const MainPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default MainPage;
