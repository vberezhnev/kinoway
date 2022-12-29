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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "stroke" | "regular" | "sm";
    color?: "standart" | "black" | "white" | "gray" | "orange";
    ripple?: boolean;
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
            variant,
            color,
            startIcon = null,
            endIcon = null,
            className,
            ripple = false,
            animationDuration = 300,
            onClick,
            ...props
        },
        ref
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
                    {startIcon && <span className={styles.startIcon}>{startIcon}</span>}{" "}
                    {children}
                </button>
            </div>
        );
    }
);

ButtonPlayMovieComponent.displayName = "ButtonDisplayMovieComponent";

export const ButtonPlayMovie = memo(ButtonPlayMovieComponent);
