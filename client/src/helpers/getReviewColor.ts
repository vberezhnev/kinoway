export const getReviewColor = (typeOfReview: string) => {
  if (typeOfReview == "Позитивный") {
    return "#dff8df";
  } else if (typeOfReview == "Негативный") {
    return "#fbd4d4";
  } else {
    return "#BDBFBE";
  }
};
