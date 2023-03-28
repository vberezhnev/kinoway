import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

import { useGetFilmByIdQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

/* import image from "@/public/images/hero-bg5.jpg"; */
import styles from "./Hero.module.scss";

import { ButtonPlayMovie } from "@/UI/ButtonPlayMovie/ButtonPlayMovie";

export const Hero = (filmId: any) => {
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
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="750px"
      height="100vh"
      mt="-130px"
      maxHeight="1000px"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      paddingBlock="var(--section-padding)"
      className={styles.hero}
    >
      <Flex className="container" paddingInline="15px">
        <Flex
          color="white"
          className="heroContent"
          marginTop="60px"
          flexDirection="column"
        >
          <Text
            color="var(--primary-color)"
            fontSize="var(--fs-4)"
            fontWeight={700}
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
                fontWeight="var(--chakra-colors-fw-500)"
                transition="var(--transition-1)"
                _hover={{ color: "$color_2" }}
              >
                Romance,
              </Link>
              <Link
                href="#"
                color="$color_4"
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
                <time>{movieLength} min</time>
              </Flex>
            </Flex>
          </Flex>
          <Box>
            <Link href={`/film/${id}`}>
              <ButtonPlayMovie startIcon="<BsFillPlayFill />">
                {" "}
                Watch now
              </ButtonPlayMovie>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
