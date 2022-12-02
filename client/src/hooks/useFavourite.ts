import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

export const useFavorites = () => {
    const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

    const toggleFavorite = useCallback(
        (id: number) => {
            if (favorites.includes(id)) {
                setFavorites(favorites.filter((favorite: number) => favorite !== id));
            } else {
                setFavorites([...favorites, id]);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [favorites]
    );

    return {
        favorites,
        toggleFavorite,
    };
};
