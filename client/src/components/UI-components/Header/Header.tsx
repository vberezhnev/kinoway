import styles from "./Header.module.scss";
import variables from "../../../styles/variables.module.scss";

import { useTheme } from "next-themes";

import { Search } from "@/components/Search/Search";
import { RoutesEnum } from "@/constants/routes";
import Link from "next/link";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.content}>
        <Link href={RoutesEnum.Home}>
          <a className={styles.logo}>
            <span>KINO</span>
            <span color={variables.primaryColor} className={styles.wayText}>
              WAY
            </span>
          </a>
        </Link>
        <input
          type="checkbox"
          onChange={() => {
            theme == "light" ? setTheme("dark") : setTheme("light");
          }}
          checked={theme == "light" ? false : true}
        />
        <span>&nbsp;Dark mode</span>

        <div className={styles.headerRight}>
          <Search />
        </div>
      </div>
    </div>
  );
};