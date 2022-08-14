import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import axios from "axios";

import Home from "../src/components/screens/Home/Home";

console.log("index ", process.env.NEXT_PUBLIC_API_KEY);

const MainPage: NextPage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default MainPage;
