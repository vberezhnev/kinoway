import styles from "./Header.module.scss";
import variables from "../../styles/variables.module.scss";

import { Search } from "@/components/Search/Search"

export const Header = () => {
  return (
    <div className={styles.header}>
      <a href="#default" className={styles.logo}>
        <span>KINO</span>
        <span color={variables.primaryColor}>WAY</span>
      </a>

      <div className={styles.headerRight}>
					<Search />
			</div>
		</div>
  );
};
