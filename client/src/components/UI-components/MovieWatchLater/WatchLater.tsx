import { FC, ReactNode } from "react";
import { useWatchLater } from "@/hooks/useWatchLater";
import { ButtonPlayMovie } from "@/UI/ButtonPlayMovie/ButtonPlayMovie";
import { classNames } from "@/helpers/classNames";
import styles from "./WatchLater.module.scss";

import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";

export interface MovieWatchLaterProps {
  id: string | number | string[] | undefined;
  isWatchLater: boolean;
  variant?: "text" | "regular";
  className?: string;
  disabled?: boolean;
}

export const MovieWatchLater: FC<MovieWatchLaterProps> = ({
  id,
  variant = "text",
  className,
  isWatchLater,
  disabled,
}) => {
  const { toggleWatchLater } = useWatchLater();

  console.log(id);

  return (
    <ButtonPlayMovie
      onClick={() => toggleWatchLater(Number(id))}
      className={classNames(
        styles.watchLater,
        isWatchLater && styles.active,
        className
      )}
      startIcon={isWatchLater ? <MdWatchLater /> : <MdOutlineWatchLater />}
      disabled={disabled}
    >
      {isWatchLater ? " Буду смотреть" : " Буду смотреть"}
    </ButtonPlayMovie>
  );
};
