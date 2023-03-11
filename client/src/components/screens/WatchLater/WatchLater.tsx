import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
// import { Filters } from '@/components/Filters/Filters';
import { useWatchLater } from "@/hooks/useWatchLater";
import FilmList from "@/components/FilmList/FilmList";
import FilmCard from "@/components/FilmCard/FilmCard";

import styles from "./WatchLater.module.scss";
import { Filters } from "@/components/Filters/Filters";
import { Flex, Spacer, Box, Wrap, WrapItem } from "@chakra-ui/react";

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
      <div className={styles.App}>
        <Flex wrap="wrap">
          <Box p={8}>
            <Filters />
          </Box>
          <Spacer />
          <Box p={8}>
            {data?.docs.map((data: any, index: any) => {
              return <FilmList item={data} key={index} />;
            })}
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default WatchLater;
