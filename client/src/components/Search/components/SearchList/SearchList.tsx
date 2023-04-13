import { FC, useEffect, useState } from "react";
import { useGetFilmsBySearchQuery } from "@/services/KinowayService";
import { Spinner } from "@chakra-ui/react";

// Components
import { ButtonBase } from "@/components/UI-components/ButtonBase/ButtonBase";
import { SearchItem } from "../SearchItem/SearchItem";

import styles from "./SearchList.module.scss";

interface SearchListProps {
  value: string;
}

export const SearchList: FC<SearchListProps> = ({ value }) => {
  const [type, setType] = useState<string>("1");
  const { data, isFetching, refetch } = useGetFilmsBySearchQuery({
    query: value,
    type,
    limit: 100,
  });

  console.log(data);
  const { docs } = { ...data };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChangeType = (type: string) => setType(type);

  return (
    <div className={styles.wrapper}>
      <>
        {docs?.length ? (
          <>
            {!isFetching ? (
              <>
                <ul className={`${"list-reset"} ${styles.list}`}>
                  {docs.map((item: any) => (
                    <SearchItem key={item.id} item={item} />
                  ))}
                </ul>
              </>
            ) : (
              <div className={styles.loader}>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="kinoway.100"
                  size="xl"
                />{" "}
              </div>
            )}
          </>
        ) : (
          <p className={styles.desc}>По вашему запросу ничего не найдено</p>
        )}
      </>
      <ButtonBase ripple className={styles.more}>
        Показать все
      </ButtonBase>
    </div>
  );
};
