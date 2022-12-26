import { FC } from "react";
import { FiBookmark, FiCheck } from "react-icons/fi";
import { useFavorites } from "@/hooks/useFavorite";
import { ButtonBase } from "@/components/UI-components/ButtonBase/ButtonBase";
import { ButtonPlayMovie } from "@/components/UI-components/ButtonPlayMovie/ButtonPlayMovie";
import { classNames } from "@/helpers/classNames";
import styles from "./MovieFavorite.module.scss";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

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
        <ButtonPlayMovie
            ripple
            onClick={() => toggleFavorite(Number(id))}
            className={classNames(
                styles.favorite,
                isFavorite && styles.active,
                className
            )}
            startIcon={isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
            disabled={disabled}
        >
            Смотреть позже
        </ButtonPlayMovie>
    );
};
