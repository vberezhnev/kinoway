import styles from "./Header.module.scss";
import variables from "../../styles/variables.module.scss";

import { useTheme } from "next-themes";

import { Search } from "@/components/Search/Search";
import { RoutesEnum } from "@/constants/routes";
import Link from "next/link";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  /* if (localStorage.getItem("theme") == "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  } */

  return (
    <div className={styles.header}>
      <Link href={RoutesEnum.Home}>
        <a className={styles.logo}>
          <span>KINO</span>
          <span color={variables.primaryColor} className={styles.wayText}>
            WAY
          </span>
        </a>
      </Link>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>

      <div className={styles.headerRight}>
        <Search />
      </div>
    </div>
  );
};
