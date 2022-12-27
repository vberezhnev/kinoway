import { useGetFavoritesQuery } from '@/services/KinowayService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
// import { Filters } from '@/components/Filters/Filters';
import { useFavorites } from '@/hooks/useFavorite';
import Head from 'next/head';

export const Favorites = () => {
    const { favorites } = useFavorites();
    const { filters } = useTypedSelector((state) => state.filtersReducer);
    const { page } = useTypedSelector((state) => state.paginationReducer);
    const query = favorites.map((el) => `search=${el}&field=id`).join('&');
    const { data, isLoading, isFetching } = useGetFavoritesQuery({ page, filters, query });

    console.log(data)

    return <div>213</div>

}

export default Favorites
