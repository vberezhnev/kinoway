import styles from "./Header.module.scss";
import Link from "next/link";
import variables from "../../../../styles/variables.module.scss";
// components
import { Search } from "@/components/Search/Search";
import { ThemeSwitcher } from "@/UI/ThemeSwitcher/ThemeSwitcher";

import { RoutesEnum } from "@/constants/routes";
import { MdFavorite } from "react-icons/md";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.content}>
        <Link href={RoutesEnum.Home} legacyBehavior>
          <a className={styles.logo}>
            <div>
              <span>K</span>
              <span color={variables.primaryColor} className={styles.wayText}>
                W
              </span>
            </div>
          </a>
        </Link>

        <div className={styles.headerRight}>
          <ThemeSwitcher />
          <Link href={RoutesEnum.Favourites} className={styles.favorite}>
            <MdFavorite size="1.6em" />
          </Link>
          <Search />
        </div>
      </div>
    </div>
  );
};
