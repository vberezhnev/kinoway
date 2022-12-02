import { useMemo } from "react";
import {
  MovieFavorite as MovieFavoriteButton,
  MovieFavoriteProps as MovieFavoriteButtonProps,
} from "@/components/UI-components/MovieFavorite/index";
import { useFavorites } from "@/hooks/useFavorite";

export type MovieFavoriteProps = Omit<MovieFavoriteButtonProps, "isFavorite">;

export const MovieFavorite = (props: MovieFavoriteProps) => {
  const { favorites } = useFavorites();
  const isFavorite = useMemo(
    () => favorites.includes(Number(props.id)),
    [favorites, props.id]
  );

  console.log(props.id);

  return <MovieFavoriteButton {...props} isFavorite={isFavorite} />;
};
