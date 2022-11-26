import Snowfall from "react-snowfall";
import { Settings } from "@/components/SnowfallSettings/Settings";
import { useSettingsStore } from "@/components/SnowfallSettings/defaultSettings";
import React, { useEffect } from "react";
import logo from "./logo.png";
import styles from "./App.module.scss";

const SnowfallPage = () => {
    const { color, snowflakeCount, radius, speed, wind, useImages } =
        useSettingsStore();

    return (
        <div className={styles.app}>
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

export default SnowfallPage;
