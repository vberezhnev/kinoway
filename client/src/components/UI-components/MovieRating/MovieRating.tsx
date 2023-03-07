import { IMovieRating } from "@/types/IMovie";
import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface MovieRatingProps {
  rating: IMovieRating | undefined;
  className?: string;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating, className }) => {
  let kp_rating = Math.floor(Number(rating?.kp));
  const imdb_rating = Math.floor(Number(rating?.imdb));

  const isHighRatingKP =
    Math.floor(Number(rating?.kp)) >= 6 ? "green.300" : "red.300";

  const isHighRatingIMDB =
    Math.floor(Number(rating?.imdb)) >= 6 ? "green.300" : "red.300";

  return (
    <>
      {rating && (
        <>
          <Box bg={isHighRatingKP} m={1} p={1} borderRadius={6}>
            <Text fontSize="sm">
              KP: {Number(rating?.kp ? rating.kp : "—").toFixed(1)}
            </Text>
          </Box>

          <Box bg={isHighRatingIMDB} m={1} p={1} borderRadius={6}>
            <Text fontSize="sm">IMDB: {rating?.imdb ? rating?.imdb : "—"}</Text>
          </Box>
        </>
      )}
    </>
  );
};
