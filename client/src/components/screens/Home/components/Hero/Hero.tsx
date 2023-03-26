import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

import { useGetFilmByIdQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

import image from "../../images/hero-bg.jpg";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const filmId = "839458";

  const { data, isFetching } = useGetFilmByIdQuery(filmId);
  const {
    alternativeName,
    id,
    name,
    type,
    shortDescription,
    poster,
    year,
    rating,
    similarMovies,
    ageRating,
    fees,
    genres,
    slogan,
    budget,
    movieLength,
    countries,
    premiere,
    description,
    facts,
    persons,
    tabs,
    top10,
    top250,
    color,
  }: any = { ...data };

  console.log(data);

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
            color="kinoway.900"
            fontSize="var(--fs-4)"
            fontWeight="var(--fw-700)"
            marginBottom="10px"
          >
            Kinoway
          </Text>
          <Heading
            fontSize="60px"
            className={styles.heroTitle}
            marginBottom="30px"
          >
            Unlimited <strong>Movie</strong>,<br /> TVs Shows, &amp; More.
          </Heading>
          <Flex
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="center"
            gap="15px 25px"
            marginBottom="50px"
          >
            <Flex
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              gap="5px 10px"
            >
              <Box className={`${styles.badge} ${styles.badgeFill}`}>PG 18</Box>
              <Box className={`${styles.badge} ${styles.badgeOutline}`}>HD</Box>
            </Flex>
            <Flex
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
            <Flex display="flex" flexWrap="wrap" alignItems="center" gap="15px">
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
          <Box>
            <Link href={`/film/${id}`}>
              <Button
                color="var(--color_1)"
                fontSize="var(--fs-11)"
                fontWeight="var(--fw-700)"
                textTransform="uppercase"
                letterSpacing="2px"
                p="16px 30px"
                gap="10px"
                alignItems="center"
                borderRadius="50px"
                border="2px solid var(--citrine)"
                transition="var(--transition-1)"
              >
                Watch now
              </Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
