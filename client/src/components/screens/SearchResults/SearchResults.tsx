import { useGetFilmByNameQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useRouter } from "next/router";
//import { RoutesEnum } from "@/constants/routes";
import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";
import FilmList from "@/components/FilmList/FilmList";
import Link from "next/link";
import Image from "next/image";

import styles from "./SearchResults.module.scss";

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

    return (
        <div>
            {data?.docs?.map((data: any) => {
                console.log(data.rating.kp);
                return <FilmList item={data} />;
            })}
        </div>
    );
};
