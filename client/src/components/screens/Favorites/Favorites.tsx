import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useFavorites } from "@/hooks/useFavorite";

import { FilmCard } from "@/components/FilmCard/FilmCard";
import { Filters } from "@/components/Filters/Filters";
import { Grid, GridItem } from "@chakra-ui/react";

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
  console.log(data);
  return (
    <div className={styles.container}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={3} colSpan={1}>
          <Filters />
        </GridItem>

        {data?.docs.map((data: any, index: any) => {
          return (
            <GridItem key={index} colSpan={{ base: 3, sm: 1 }}>
              {" "}
              <FilmCard item={data} />{" "}
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Favorites;
