import Snowfall from "react-snowfall";
//import GithubLink from './components/GithubLink/GithubLink'
import Settings from "./components/Settings";
import { useSettingsStore } from "./settings";
import logo from "./logo.png";
import React, { useEffect } from "react";
import Script from "next/script";
//import './App.css'

const githubURL = process.env.REACT_APP_GITHUB_URL as string;
const packageName = process.env.REACT_APP_PACKAGE_NAME as string;

const App = () => {
  const { color, snowflakeCount, radius, speed, wind, useImages } =
    useSettingsStore();

  return (
    <div className="root">
      {/* <Script>
        {`const snowflake = document.createElement("img");
  snowflake.src = logo;

  const images = [snowflake];`}
      </Script> */}
			
      <Snowfall
        color={color}
        snowflakeCount={snowflakeCount}
        radius={radius}
        speed={speed}
        wind={wind}
        images={undefined}
      />
      <Settings />
    </div>
  );
};

export default App;
