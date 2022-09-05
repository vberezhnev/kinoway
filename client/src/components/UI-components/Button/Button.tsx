import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import { forwardRef } from "react";

import styles from "./Button.module.scss";

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ripple?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
}

type Data = {
  text: String;
  children: React.ReactNode;
};

const Button = ({ props, onClick, children }: any) => {
  return (
    <button className={styles.ButtonBase_btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
