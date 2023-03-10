import {
  ButtonHTMLAttributes,
  forwardRef,
  memo,
  ReactNode,
  useRef,
} from "react";
import { classNames } from "@/helpers/classNames";
import { useRipple } from "react-use-ripple";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import styles from "./ButtonPlayMovie.module.scss";
import { Box, Button, Stack } from "@chakra-ui/react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
  onClick?: any;
  children?: ReactNode;
}

export const ButtonPlayMovieComponent = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      startIcon = null,
      endIcon = null,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const commonRef = ref || buttonRef;

    return (
      <Button
        borderRadius="full"
        pt={6}
        pr={8}
        pb={6}
        pl={8}
        m={1}
        color="white"
        _hover={{
          background: "#424242",
          color: "white",
        }}
        onClick={onClick}
        bg="#313131"
        {...props}
      >
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}{" "}
        {children}
      </Button>
    );
  }
);

ButtonPlayMovieComponent.displayName = "ButtonDisplayMovieComponent";

export const ButtonPlayMovie = memo(ButtonPlayMovieComponent);
