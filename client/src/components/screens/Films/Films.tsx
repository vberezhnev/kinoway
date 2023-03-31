import { useGetFilmsQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Catalog } from "@/components/Catalog/Catalog";
import { Filters } from "@/components/Filters/Filters";
import { Grid, GridItem } from "@chakra-ui/react";
import { FilmCard } from "@/components/FilmCard/FilmCard";

export const Films = () => {
  const { filters } = useTypedSelector((state) => state.filtersReducer);
  const { page } = useTypedSelector((state) => state.paginationReducer);
  const { data, isLoading, isFetching } = useGetFilmsQuery({ page, filters });

  return (
    <div className="container">
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
