import {
  ButtonHTMLAttributes,
  memo,
  PropsWithChildren,
  ReactNode,
} from "react";

import styles from "./ButtonPlayMovie.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "stroke" | "regular" | "sm";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
}

const ButtonPlayMovie = ({
  children,
  variant,
  startIcon = null,
  endIcon = null,
  className,
  animationDuration,
  ...props
}: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Смотреть</button>
    </div>
  );
};

export const MemoizedButtonPlayMovie = memo(ButtonPlayMovie);
