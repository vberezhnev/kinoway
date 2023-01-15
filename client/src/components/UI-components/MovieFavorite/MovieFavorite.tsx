import { FC } from "react";
import { useFavorites } from "@/hooks/useFavorite";
import { ButtonPlayMovie } from "@/UI/ButtonPlayMovie/ButtonPlayMovie";
import { classNames } from "@/helpers/classNames";
import styles from "./MovieFavorite.module.scss";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

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
            {isFavorite ? " " : "Добавить в избранное"}
        </ButtonPlayMovie>
    );
};
