import { useGetFilmByNameQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useRouter } from "next/router";
//import { RoutesEnum } from "@/constants/routes";
import { MovieRating } from "@/components/UI-components/MovieRating/MovieRating";
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
                return (
                    <div className={styles.styles_root} key={data.id}>
                        <div>
                            <Image
                                className={styles.image}
                                src={data?.poster?.url ? data.poster.url : "/public/vercel.svg"}
                                width={100}
                                height={160}
                            />
                        </div>

                        <div className={styles.styles_content}>
                            <div className={styles.main}>
                                <h3>
                                    <Link
                                        className={styles.movieTitle}
                                        href={`/film/${data?.id}`}
                                    >
                                        {data.name}
                                    </Link>
                                </h3>
                                <p className={styles.secondInfo}>
                                    {data.alternativeName}, {data.year}
                                    {data.movieLength ? `, ${data.movieLength} мин` : ""}
                                </p>
                            </div>
                            <div className={styles.user}>
                                <div className={styles.rating}>
                                    <div className={styles.kinoway}>
                                        <MovieRating
                                            rating={data.? rating?.kp}
                                            className="kinowayValue"
                                        />
                                        <span className={styles.kinowayValue}>{}</span>
                                        <span className={styles.kinowayCount}>17 667</span>
                                    </div>
                                    <div className="styles">Топ 250: 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
