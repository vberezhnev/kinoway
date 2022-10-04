import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/helpers/classNames";

import styles from "./ButtonPlayMovie.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "stroke" | "regular" | "sm";
  color?: "standart" | "black" | "white" | "gray" | "orange";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
  onClick?: any;
}

const ButtonPlayMovieComponent = ({
  children,
  variant,
  color,
  startIcon = null,
  endIcon = null,
  className,
  animationDuration,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={
          (styles.button,
          classNames(
            variant === "stroke" && styles.stroke,
            variant === "regular" && styles.regular,
            variant === "sm" && styles.small,

            color === "standart" && styles.standart,
            color === "black" && styles.black,
            color === "white" && styles.white,
            color === "orange" && styles.orange,
            color === "gray" && styles.gray
          ),
          className)
        }
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export const ButtonPlayMovie = memo(ButtonPlayMovieComponent);
