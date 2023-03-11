import dynamic from "next/dynamic";
import type { MovieWatchLaterProps } from "./WatchLater";
export type { MovieWatchLaterProps };

export const MovieWatchLater = dynamic<MovieWatchLaterProps>(
  () => import("./WatchLater").then((mod) => mod.MovieWatchLater),
  {
    ssr: false,
  }
);
