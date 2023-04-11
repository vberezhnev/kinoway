import { PropsWithChildren, useEffect, useState } from "react";

import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

import classNames from "classnames";
import styles from "./Catalog.module.scss";

import { Title } from "@/UI/Title/Title";
import { FilmCard } from "@/components/FilmCard/FilmCard";
import { FiltersToggle } from "./components/FiltersToggle/FiltersToggle";
import { Pagination } from "@/UI/Pagination/Pagination";
import { Spinner, SpinnerSizes } from "@/UI/Spinner/Spinner";
import { GridItem } from "@chakra-ui/react";
import { Grid as GridChakra } from "@chakra-ui/react";
/* import {
 *   Previous,
 *   Paginator,
 *   PageGroup,
 *   Page,
 *   Next,
 *   generatePages
 * } from "chakra-paginator"; */

import { IMovies } from "@/types/IMovies";
import { IMovie } from "@/types/IMovie";

interface ContentProps {
  data: IMovies | undefined;
  isFetching?: boolean;
  isLoading?: boolean;
}

function Catalog({ children }: PropsWithChildren<{}>) {
  return <div className={styles.catalog}>{children}</div>;
}

module Catalog {
  export const Container = ({ children }: PropsWithChildren<{}>) => {
    return (
      <div className={classNames("container wrapper", styles.container)}>
        {children}
      </div>
    );
  };

  export const Heading = ({ children }: PropsWithChildren<{}>) => {
    return <Title className={styles.title}>{children}</Title>;
  };

  export const Subtitle = ({ children }: PropsWithChildren<{}>) => {
    return (
      <Title className={styles.subtitle} variant="h2">
        {children}
      </Title>
    );
  };

  export const Description = ({ children }: PropsWithChildren<{}>) => {
    return <p className={styles.desc}>{children}</p>;
  };

  export const Loader = () => {
    return (
      <div className={styles.spinner}>
        <Spinner size={SpinnerSizes.medium} />
      </div>
    );
  };

  export const Grid = ({ data }: ContentProps) => {
    return (
      <>
        {data?.docs?.map((data: any, index: any) => (
          <GridItem key={index}>
            <FilmCard item={data} />
          </GridItem>
        ))}
      </>
    );
  };

  /* export const Movies = ({ data }: ContentProps) => {
			 <GridItem >
			 <FilmCard item={data} />
			 </GridItem>
			 );
			 }; */

  /* export const CustomFilters = () => {
   *   return (
   *     <GridItem rowSpan={3} colSpan={1}>
   *       <Filters />
   *     </GridItem>
   *   );
   * }; */

  export const Body = ({ children }: PropsWithChildren<{}>) => {
    return (
      <GridChakra
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={6}
      >
        {children}
      </GridChakra>
    );
  };

  export const Content = ({ data, isLoading, isFetching }: ContentProps) => {
    const { page } = useTypedSelector((state) => state.paginationReducer);
    const { setPage } = useActions();

    useEffect(() => {
      scrollTo(0, 0);
    }, [page]);

    const CatalogContent = (
      <>
        {/* <Catalog.Grid data={data} /> */}

        {data?.docs?.map((data: any, index: any) => (
          <GridItem key={index}>
            <FilmCard item={data} />
          </GridItem>
        ))}

        <Pagination page={page} setPage={setPage} pages={data?.pages} />
      </>
    );

    return (
      <>
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <div className={styles.content}>
            {!data?.docs?.length ? (
              <Subtitle>Ничего не найдено!</Subtitle>
            ) : (
              CatalogContent
            )}
          </div>
        )}
      </>
    );
  };
}

export { Catalog };
