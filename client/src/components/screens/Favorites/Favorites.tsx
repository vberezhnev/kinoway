import { useGetFavoritesQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useFavorites } from "@/hooks/useFavorite";

import { FilmCard } from "@/components/FilmCard/FilmCard";
import { Filters } from "@/components/Filters/Filters";
import { Grid, GridItem } from "@chakra-ui/react";
import { Catalog } from "@/components/Catalog/Catalog";

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

  const { Container, Content, Body } = Catalog;

  return (
    <Catalog>
      <Container>
        <Body>
          <Filters />
          {query ? (
            <Content
              data={data}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          ) : (
            <p>Список избранного пуст</p>
          )}
        </Body>
      </Container>
    </Catalog>
  );
};

export default Favorites;
