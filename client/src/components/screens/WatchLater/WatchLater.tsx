import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
// import { Filters } from '@/components/Filters/Filters';
import { useWatchLater } from "@/hooks/useWatchLater";
import { FilmCard } from "@/components/FilmCard/FilmCard";

import styles from "./WatchLater.module.scss";
import { Filters } from "@/components/Filters/Filters";
import { Flex, Spacer, Grid, GridItem } from "@chakra-ui/react";

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

export default WatchLater;
