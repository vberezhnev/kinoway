import { FC } from "react";
import { IMovieRating } from "@/types/IMovie";
import { Box, Flex, Text } from "@chakra-ui/react";

interface MovieRatingProps {
  rating: IMovieRating | undefined;
  className?: string;
}

export const MovieRating: FC<MovieRatingProps> = ({ rating, className }) => {
  const kpRating = Number(rating?.kp);
  const imdbRating = Number(rating?.imdb);

  const bgStyle = {
    backgroundColor:
      kpRating >= 6 && imdbRating >= 6
        ? "#3BB33B"
        : kpRating < 6 && imdbRating < 6
        ? "#D32F2F"
        : "#5F5F5F",
    borderRadius: "0",
    padding: "3px 10px 3px 10px",
  };

  return (
    <>
      {rating && (
        <Box style={bgStyle} className={className}>
          <Flex alignItems="center">
            <Box>
              <Text fontSize="sm" fontWeight="bold" color="white">
                {kpRating.toFixed(1)}
              </Text>
              {/* <Text fontSize="sm" fontWeight="bold">
									IMDb: {rating?.imdb ? rating.imdb.toFixed(1) : "—"}
									</Text> */}
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};
