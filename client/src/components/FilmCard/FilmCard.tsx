import { FC } from "react";
import Link from "next/link";
// import Image from "next/image";
import { IMovie } from "@/types/IMovie";

import {
  Heading,
  Stack,
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import styles from "./FilmCard.module.scss";
import { MovieRating } from "../UI-components/MovieRating/MovieRating";

interface FilmItemProps {
  item: IMovie;
}

export const FilmCard: FC<FilmItemProps> = ({ item }) => {
  const {
    id,
    poster,
    description,
    year,
    name,
    alternativeName,
    names,
    type,
    rating,
  }: any = {
    ...item,
  };

  console.log(item);

  return (
    <div className={styles.movieCard}>
      <Link href={`/film/${id}`}>
        <figure className={styles.cardBanner}>
          <img src={poster?.url} alt={description} className="img" />
        </figure>
      </Link>
      <div className={styles.titleWrapper}>
        <a href={`/film/${id}`}>
          <h3 className={styles.cardTitle}>{name}</h3>
        </a>
        <time>{year}</time>
      </div>
      <div className={styles.cardMeta}>
        <div className={styles.badge}>HD</div>
        <div className={styles.duration}>
          <time>{type}</time>
        </div>
        <div className={styles.rating}></div>
        <MovieRating rating={rating} />
      </div>
    </div>
  );

  /* return (
   *   <Link href={`/film/${id}`}>
   *     <Card maxW="sm" w={260} minHeight={480}>
   *       <CardBody>
   *         <Box position="relative">
   *           <Box position="absolute" left="10px" top="10px">
   *             <MovieRating rating={rating} />
   *           </Box>
   *         </Box>
   *         <Image src={poster?.previewUrl} borderRadius="md" w={222} h={333} />
   *         <Stack mt="3" spacing="3"></Stack>
   *         <Flex>
   *           <Box>
   *             <Heading size="md">{name}</Heading>
   *             <Text color="gray.500">{alternativeName}</Text>
   *           </Box>
   *           <Spacer />
   *         </Flex>
   *       </CardBody>
   *     </Card>
   *   </Link>
   * ); */
};
