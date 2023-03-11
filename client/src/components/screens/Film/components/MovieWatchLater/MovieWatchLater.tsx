import { useMemo } from "react";
import {
  MovieWatchLater as MovieWatchLaterButton,
  MovieWatchLaterProps as MovieWatchLaterButtonProps,
} from "@/components/UI-components/MovieWatchLater/index";
import { useWatchLater } from "@/hooks/useWatchLater";

export type MovieWatchLaterProps = Omit<
  MovieWatchLaterButtonProps,
  "isWatchLater"
>;

export const MovieWatchLater = (props: MovieWatchLaterProps) => {
  const { watchLater } = useWatchLater();
  const isWatchLater = useMemo(
    () => watchLater.includes(Number(props.id)),
    [watchLater, props.id]
  );

  return <MovieWatchLaterButton {...props} isWatchLater={isWatchLater} />;
};
