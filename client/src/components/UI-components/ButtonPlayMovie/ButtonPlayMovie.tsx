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

    return (
      <Button
        color="var(--color_1)"
        fontSize="var(--fs-11)"
        fontWeight="var(--fw-700)"
        textTransform="uppercase"
        letterSpacing="2px"
        display="flex"
        alignItems="center"
        gap={2}
        padding="16px 30px"
        border="2px solid var(--citrine)"
        borderRadius="50px"
        transition="var(--transition-1)"
        bg="var(--rich-black-fogra-29)"
        _hover={{
          bg: "var(--citrine)",
          color: "var(--color_5)",
        }}
        {...props}
        onClick={onClick}
      >
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        {children}
      </Button>
    );
  }
);

ButtonPlayMovieComponent.displayName = "ButtonDisplayMovieComponent";

export const ButtonPlayMovie = memo(ButtonPlayMovieComponent);
