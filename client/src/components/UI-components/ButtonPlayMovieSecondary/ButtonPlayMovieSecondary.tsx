import { ButtonHTMLAttributes, memo, ReactNode } from "react";

import styles from "./ButtonPlayMovieSecondary.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "stroke" | "regular" | "sm";
  color?: "standart" | "black" | "white" | "gray";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
  onClick?: any;
}

const ButtonPlayMovieSecondaryComponent = ({
  children,
  variant,
  startIcon = null,
  endIcon = null,
  className,
  animationDuration,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export const ButtonPlayMovieSecondary = memo(ButtonPlayMovieSecondaryComponent);
