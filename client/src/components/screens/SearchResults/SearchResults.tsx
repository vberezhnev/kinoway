import { useGetFilmByNameQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useRouter } from "next/router";
// import {Catalog} from "@/components/Catalog/Catalog";
// import {Filters} from "@/components/Filters/Filters";
import { RoutesEnum } from "@/constants/routes";
import Link from "next/link";

export const SearchResults = () => {
  const {
    query: { id },
  } = useRouter();
  const { filters } = useTypedSelector((state) => state.filtersReducer);
  const { page } = useTypedSelector((state) => state.paginationReducer);
  const { data, isLoading, isFetching } = useGetFilmByNameQuery({
    id,
    page,
    filters,
  });

  //const { Container, Heading, Description, Body, Content } = Catalog;
  //console.log(data?.docs);

  return (
    <>
      {data?.docs?.map((data: Object) => {
        console.log(data);
        return <p key={data.id}>{data.name}</p>;
      })}
    </>
  );
};
