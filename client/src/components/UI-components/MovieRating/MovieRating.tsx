import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "@chakra-ui/react";

export const MovieRating = ({ rating }) => {
  const kpRating = Number(rating?.kp);
  const imdbRating = Number(rating?.imdb);

  const maxRating = 10;

  const kpBarStyle = {
    width: `${(kpRating / maxRating) * 100}%`,
    backgroundColor: "#E53E3E",
    height: "0.5rem",
    borderTopLeftRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
  };

  const imdbBarStyle = {
    width: `${(imdbRating / maxRating) * 100}%`,
    backgroundColor: "#3182CE",
    height: "0.5rem",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
  };

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
        <Box style={bgStyle}>
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

MovieRating.propTypes = {
  rating: PropTypes.shape({
    kp: PropTypes.number,
    imdb: PropTypes.number,
  }),
};
