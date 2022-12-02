import { FC } from "react";
import { FiBookmark, FiCheck } from "react-icons/fi";
import { useFavorites } from "@/hooks/useFavorite";
import { ButtonBase } from "@/components/UI-components/ButtonBase/ButtonBase";
import { classNames } from "@/helpers/classNames";
import styles from "./MovieFavorite.module.scss";

export interface MovieFavoriteProps {
    id: string | number | string[] | undefined;
    isFavorite: boolean;
    variant?: "text" | "regular";
    className?: string;
    disabled?: boolean;
}

export const MovieFavorite: FC<MovieFavoriteProps> = ({
    id,
    variant = "text",
    className,
    isFavorite,
    disabled,
}) => {
    const { toggleFavorite } = useFavorites();

    return (
        <ButtonBase
            ripple
            onClick={() => toggleFavorite(Number(id))}
            className={classNames(
                styles.favorite,
                isFavorite && styles.active,
                className
            )}
            startIcon={isFavorite ? <FiCheck /> : <FiBookmark />}
            disabled={disabled}
        >
            Буду смотреть
        </ButtonBase>
    );
};
