import styles from "./Header.module.scss";
import variables from "../../../styles/variables.module.scss";

import { Search } from "@/components/Search/Search";
import { RoutesEnum } from "@/constants/routes";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/UI-components/ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
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

        <div className={styles.headerRight}>
          <ThemeSwitcher />
          <Search />
        </div>
      </div>
    </div>
  );
};
