import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useWatchLater } from "@/hooks/useWatchLater";

import { Filters } from "@/components/Filters/Filters";
import { FilmCard } from "@/components/FilmCard/FilmCard";
import { Grid, GridItem } from "@chakra-ui/react";

import styles from "./WatchLater.module.scss";

export const WatchLater = () => {
  const { watchLater } = useWatchLater();
  const { filters } = useTypedSelector((state) => state.filtersReducer);
  const { page } = useTypedSelector((state) => state.paginationReducer);
  const query = watchLater.map((el) => `search=${el}&field=id`).join("&");
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

export default WatchLater;
