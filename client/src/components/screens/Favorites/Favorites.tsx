import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
// import { Filters } from '@/components/Filters/Filters';
import { useFavorites } from "@/hooks/useFavorite";
import FilmCard from "@/components/FilmCard/FilmCard";
import Head from "next/head";

export const Favorites = () => {
    const { favorites } = useFavorites();
    const { filters } = useTypedSelector((state) => state.filtersReducer);
    const { page } = useTypedSelector((state) => state.paginationReducer);
    const query = favorites.map((el) => `search=${el}&field=id`).join("&");
    const { data, isLoading, isFetching } = useGetFavoritesQuery({
        page,
        filters,
        query,
    });

    console.log(data?.docs);

    return (
        <div>
            {data?.docs.map((data: any, index: any) => {
                // console.log(data.name);

                // return <div key={index}>Имя фильма: {data.name}</div>;
                return <FilmCard item={data} />;
            })}
        </div>
    );
};

export default Favorites;
