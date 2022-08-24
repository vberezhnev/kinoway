import { useGetFilmByNameQuery } from "@/services/KinowayService";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useRouter } from "next/router";
//import { RoutesEnum } from "@/constants/routes";
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

  //const { Container, Heading, Description, Body, Content } = Catalog;
  //console.log(data?.docs);

  return (
    <div>
      {data?.docs?.map((data: Object) => {
        console.log(data);
        return (
          <div className={styles.styles_root} key={data.id}>
            <div>
              <Image
                className={styles.image}
                src={data.poster.url}
                height={"96px"}
                width={"64px"}
              />
            </div>

            <div className={styles.styles_content}>
              <div className={styles.main}>
                <Link
                  className={styles.movieTitle}
                  href={`https://kirlovon.dev/Kinopoisk-Watch/?id=${data.id}`}
                >
                  {data.name}
                </Link>
                <p className={styles.secondInfo}>
                  {data.alternativeName}, {data.year}
                  {data.movieLength ? true : "asd"}
                </p>
              </div>
              <div className={styles.user}>
                <div className={styles.rating}>
                  <div className={styles.kinoway}>
                    <span className={styles.kinowayValue}>
                      {data.rating.kp}
                    </span>
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
