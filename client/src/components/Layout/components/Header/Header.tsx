import styles from "./Header.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import variables from "../../../../styles/variables.module.scss";
// components
import { Search } from "@/components/Search/Search";

import { RoutesEnum } from "@/constants/routes";
import { MdFavorite } from "react-icons/md";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#313131", "#313131");
  const color = useColorModeValue("white", "white");

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
          <Button
            bg={bg}
            color={color}
            onClick={() => toggleColorMode()}
            _hover={{
              background: "#424242",
              color: "white",
            }}
          >
            {colorMode === "light" ? (
              <MoonIcon boxSize={5} />
            ) : (
              <SunIcon boxSize={5} />
            )}
          </Button>
          <Link href={RoutesEnum.Favourites}>
            <Button
              mr={2}
              ml={2}
              bg={bg}
              color={color}
              _hover={{
                background: "#424242",
                color: "white",
              }}
            >
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
