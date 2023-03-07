// import styles from "./Header.module.scss";
import Link from "next/link";
import React, { useState } from "react";
// import variables from "../../../../styles/variables.module.scss";
// components
import { Search } from "@/components/Search/Search";

import { RoutesEnum } from "@/constants/routes";
import {
  MoonIcon,
  SunIcon,
  StarIcon,
  TimeIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  // MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);

  const bg = useColorModeValue("#313131", "#313131");
  const color = useColorModeValue("white", "white");

  const toggle = () => setIsOpen(!isOpen);

  const MenuLinks = ({ isOpen }: any) => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
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

          <MenuItem to="/signup">
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={bg}
              color={color}
              _hover={{
                background: "#424242",
                color: "white",
              }}
            >
              Create Account
            </Button>
          </MenuItem>
        </Stack>
      </Box>
    );
  };

  const MenuToggle = ({ toggle, isOpen }: any) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <SunIcon />}
      </Box>
    );
  };

  const Logo = (props: any) => {
    return (
      <Box {...props}>
        <Text fontSize="lg" fontWeight="bold">
          <Link href={RoutesEnum.Home} legacyBehavior>
            <a>KW</a>
          </Link>
        </Text>
      </Box>
    );
  };

  const MenuItem = ({ children, to = "/", ...rest }: any) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    );
  };

  const NavBarContainer = ({ children, ...props }: any) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["#1f1f1f", "#1f1f1f", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer bg="#1f1f1f">
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );

  // return (
  //   <div className={styles.headerContainer}>
  //     <div className={styles.content}>
  //       <Link href={RoutesEnum.Home} legacyBehavior>
  //         <a className={styles.logo}>
  //           <div>
  //             <span>K</span>
  //             <span color={variables.primaryColor} className={styles.wayText}>
  //               W
  //             </span>
  //           </div>
  //         </a>
  //       </Link>

  //       <div className={styles.headerRight}>
  //         <MenuToggle toggle={toggle} isOpen={isOpen} />
  //         <Button
  //           bg={bg}
  //           color={color}
  //           onClick={() => toggleColorMode()}
  //           _hover={{
  //             background: "#424242",
  //             color: "white",
  //           }}
  //         >
  //           {colorMode === "light" ? (
  //             <MoonIcon boxSize={5} />
  //           ) : (
  //             <SunIcon boxSize={5} />
  //           )}
  //         </Button>
  //         <Link href={RoutesEnum.Favourites}>
  //           <Button
  //             mr={2}
  //             ml={2}
  //             bg={bg}
  //             color={color}
  //             _hover={{
  //               background: "#424242",
  //               color: "white",
  //             }}
  //           >
  //             <StarIcon boxSize={5} />
  //           </Button>
  //         </Link>
  //         <Search />
  //       </div>
  //     </div>
  //   </div>
  // );
};
