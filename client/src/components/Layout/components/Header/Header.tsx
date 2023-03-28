import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Search } from "@/components/Search/Search";
import headerImage from "@/public/images/footer-bg.jpg";
import { RoutesEnum } from "@/constants/routes";
import {
  MoonIcon,
  SunIcon,
  StarIcon,
  CloseIcon,
  HamburgerIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Box,
  Text,
  Stack,
  Icon,
} from "@chakra-ui/react";

export const Header = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false); //React.useState(false)
  const [bgColor, setBgColor] = useState({
    color: "transparent",
    transition: "background-color 0.5s ease-out",
  });

  const bg = useColorModeValue("#313131", "#313131");
  const color = useColorModeValue("white", "white");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor({
          color: "#131119",
          transition: "background-color 200ms ease-out",
        });
      } else {
        setBgColor({
          color: "rgb(19, 17, 25, 0.8)",
          transition: "background-color 200ms ease-out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            KINO<strong style={{ color: "var(--citrine)" }}>WAY</strong>
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
      style={{ transition: bgColor.transition }}
      bg={bgColor.color}
      {...props}
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
