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
  HamburgerIcon,
  CalendarIcon,
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
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Collapse,
  useDisclosure,
  Icon,
  Heading,
} from "@chakra-ui/react";

export const Header = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false); //React.useState(false)

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
          spacing={6}
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
          <Link href={RoutesEnum.Favorites}>
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
          <Link href={RoutesEnum.WatchLater}>
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
              <CalendarIcon boxSize={5} />
            </Button>
          </Link>
          <Search />
        </Stack>
      </Box>
    );
  };

  const MenuToggle = ({ toggle, isOpen }: any) => {
    return (
      <Box
        display={{ base: "block", md: "none" }}
        onClick={toggle}
        cursor="pointer"
        transition="0.5s linear"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Icon
          as={isOpen ? CloseIcon : HamburgerIcon}
          boxSize={6}
          transform={isOpen ? "rotate(90deg)" : undefined}
          transition="0.5s linear"
        />
      </Box>
    );
  };

  const Logo = (props: any) => {
    return (
      <Box {...props}>
        <Link href={RoutesEnum.Home} legacyBehavior>
          <Text fontSize="2xl" fontWeight="bold">
            KINOWAY
          </Text>
        </Link>
      </Box>
    );
  };

  /* const MenuItem = ({ children, to = "/", ...rest }: any) => {
   *   return (
   *     <Link href={to}>
   *       <Text display="block" {...rest}>
   *         {children}
   *       </Text>
   *     </Link>
   *   );
   * };
   */
  const NavBarContainer = ({ children, ...props }: any) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={5}
        p={5}
        pr={{ sm: "0px", md: "20px", lg: "100px", xl: "420px" }}
        pl={{ sm: "0px", md: "20px", lg: "100px", xl: "420px" }}
        bg={["#1f1f1f", "#1f1f1f", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };

  return (
    <NavBarContainer
      bg="#1A202C"
      {...props}
      transition="background-color 200ms linear"
    >
      <Logo
        w="200px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
