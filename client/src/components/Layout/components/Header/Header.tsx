import styles from "./Header.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import variables from "../../../../styles/variables.module.scss";
// components
import { Search } from "@/components/Search/Search";

import { RoutesEnum } from "@/constants/routes";
import { MdFavorite } from "react-icons/md";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon, StarIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    console.log("colorMode", colorMode);
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, []);

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
          <Button onClick={() => toggleColorMode()}>
            {colorMode === "light" ? (
              <MoonIcon boxSize={5} />
            ) : (
              <SunIcon boxSize={5} />
            )}
          </Button>
          <Link href={RoutesEnum.Favourites}>
            <Button mr={2} ml={2}>
              <StarIcon boxSize={5} />
            </Button>
          </Link>
          <Search />
        </div>
      </div>
    </div>
  );
};

// import { ThemeSwitcher } from "@/UI/ThemeSwitcher/ThemeSwitcher";
// <ThemeSwitcher />
