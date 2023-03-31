import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
// import { Filters } from '@/components/Filters/Filters';
import { useFavorites } from "@/hooks/useFavorite";
import FilmList from "@/components/FilmList/FilmList";
import { FilmCard } from "@/components/FilmCard/FilmCard";

import styles from "./Favorites.module.scss";
import { Filters } from "@/components/Filters/Filters";
import {
  Flex,
  Spacer,
  Box,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";

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
            <GridItem colSpan={{ base: 3, sm: 1 }}>
              {" "}
              <FilmCard item={data} key={index} />{" "}
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default Favorites;
