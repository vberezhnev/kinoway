import styles from "./Header.module.scss";
import variables from "../../../../styles/variables.module.scss";
import { Search } from "@/components/Search/Search";
import { RoutesEnum } from "@/constants/routes";
import Link from "next/link";
import { ThemeSwitcher } from "@/UI/ThemeSwitcher/ThemeSwitcher";

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.content}>
                <Link href={RoutesEnum.Home}>
                    <a className={styles.logo}>
                        <span>K</span>
                        <span color={variables.primaryColor} className={styles.wayText}>
                            W
                        </span>
                    </a>
                </Link>

                <div className={styles.headerRight}>
                    <ThemeSwitcher />
                    <Search />
                    <Link href={RoutesEnum.Favourites}>Favorites</Link>
                </div>
            </div>
        </div>
    );
};
