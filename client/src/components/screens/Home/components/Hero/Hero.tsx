import styles from "./Hero.module.scss";
import { Box, Flex, Text, Heading, Link, Button } from "@chakra-ui/react";
import image from "../../images/hero-bg.jpg";

export const Hero = () => {
  return (
    <Box
      backgroundImage={`${image}`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="750px"
      height="100vh"
      maxHeight="1000px"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      paddingBlock="var(--section-padding)"
      className={styles.hero}
    >
      <Flex className="container" paddingInline="15px">
        <Flex className="heroContent" marginTop="60px" flexDirection="column">
          <Text
            className="heroSubtitle"
            color="kinoway.900"
            fontSize="var(--fs-4)"
            fontWeight="var(--fw-700)"
            marginBottom="10px"
          >
            Kinoway
          </Text>
          <Heading fontSize="60px" className="heroTitle" marginBottom="30px">
            Unlimited <strong>Movie</strong>,<br /> TVs Shows, &amp; More.
          </Heading>
          <Flex
            className="metaWrapper"
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="center"
            gap="15px 25px"
            marginBottom="50px"
          >
            <Flex
              className="badgeWrapper"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              gap="5px 10px"
            >
              <Box className={`${styles.badge} ${styles.badgeFill}`}>PG 18</Box>
              <Box className={`${styles.badge} ${styles.badgeOutline}`}>HD</Box>
            </Flex>
            <Flex
              className="ganreWrapper"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              gap="5px 10px"
            >
              <Link
                href="#"
                color="$color_4"
                fontSize="var(--fs-9)"
                fontWeight="var(--fw-500)"
                transition="var(--transition-1)"
                _hover={{ color: "$color_2" }}
              >
                Romance,
              </Link>
              <Link
                href="#"
                color="$color_4"
                fontSize="var(--fs-9)"
                fontWeight="var(--fw-500)"
                transition="var(--transition-1)"
                _hover={{ color: "$color_2" }}
              >
                Drama
              </Link>
            </Flex>
            <Flex
              className="dateTime"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              gap="15px"
            >
              <Flex
                display="flex"
                alignItems="center"
                gap="5px"
                color="$color_4"
                fontSize="var(--fs-9)"
                fontWeight="var(--fw-500)"
              >
                <time dateTime="2022">2022</time>
              </Flex>
              <Flex
                display="flex"
                alignItems="center"
                gap="5px"
                color="$color_4"
                fontSize="var(--fs-9)"
                fontWeight="var(--fw-500)"
              >
                <time dateTime="PT128M">128 min</time>
              </Flex>
            </Flex>
          </Flex>
          <Button className={`${styles.btn} ${styles.btnPrimary}`}>
            <span>Watch now</span>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
