import { ButtonHTMLAttributes, memo, ReactNode, useRef } from "react";
import { classNames } from "@/helpers/classNames";
import { useRipple } from "react-use-ripple";

import styles from "./ButtonPlayMovie.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "stroke" | "regular" | "sm";
    color?: "standart" | "black" | "white" | "gray" | "orange";
    ripple: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    animationDuration?: number;
    onClick?: any;
    children: ReactNode;
}

const ButtonPlayMovieComponent = (
    {
        children,
        variant,
        color,
        startIcon = null,
        endIcon = null,
        className,
        ripple = false,
        animationDuration = 300,
        onClick,
        ...props
    }: ButtonProps,
    ref: any
) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const commonRef = ref || buttonRef;

    /* @ts-ignore */
    useRipple(commonRef, {
        disabled: !ripple,
        animationLength: animationDuration,
    });
    return (
        <div className={styles.buttonContainer}>
            <button
                className={classNames(
                    styles.button,
                    variant === "stroke" && styles.stroke,
                    variant === "regular" && styles.regular,
                    variant === "sm" && styles.small,

                    color === "standart" && styles.standart,
                    color === "black" && styles.black,
                    color === "white" && styles.white,
                    color === "orange" && styles.orange,
                    color === "gray" && styles.gray,
                    className
                )}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export const ButtonPlayMovie = memo(ButtonPlayMovieComponent);
