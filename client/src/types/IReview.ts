export interface IReview {
  author: string;
  date: string;
  id: number;
  movieId: number;
  review: string;
  reviewDislikes: number;
  reviewLikes: number;
  title: string;
  type: "Позитивный" | "Нейтральный" | "Негативный";
  updatedAt: Date;
  userRating: number;
}
