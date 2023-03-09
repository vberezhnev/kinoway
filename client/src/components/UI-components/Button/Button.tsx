import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import { forwardRef } from "react";

import styles from "./Button.module.scss";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ripple?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
}

export const Button = ({ onClick, children, props }: any) => {
  return (
    <ChakraButton {...props} onClick={onClick}>
      {children}
    </ChakraButton>
  );
};

/* <button className={styles.ButtonBase_btn} onClick={onClick}>
      {children}
      </button> */
