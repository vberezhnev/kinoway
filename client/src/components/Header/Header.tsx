import styles from "./Header.module.scss";
import variables from "../../styles/variables.module.scss";

import { Search } from "@/components/Search/Search";
import { RoutesEnum } from "@/constants/routes";
import Link from "next/link";

export const Header = () => {
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

      <div className={styles.headerRight}>
        <Search />
      </div>
    </div>
  );
};
