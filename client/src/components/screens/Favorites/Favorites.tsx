import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
// import { Filters } from '@/components/Filters/Filters';
import { useFavorites } from "@/hooks/useFavorite";
import FilmList from "@/components/FilmList/FilmList";
import FilmCard from "@/components/FilmCard/FilmCard";

import styles from "./Favorites.module.scss";

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

  // console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        {data?.docs.map((data: any, index: any) => {
          return <FilmList item={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
