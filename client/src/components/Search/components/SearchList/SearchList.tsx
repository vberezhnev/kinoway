import { FC, useEffect, useState } from "react";
import { useGetFilmsBySearchQuery } from "@/services/KinowayService";
//import { Spinner, SpinnerSizes } from "@/UI/Spinner/Spinner";
import { Button } from "@/components/UI-components/Button/Button";

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
  const { docs } = { ...data };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChangeType = (type: string) => setType(type);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.btns}>
          <Button
            onClick={() => handleChangeType("1")}
            bg="#313131"
            color="white"
            _hover={{
              background: "#424242",
              color: "white",
            }}
          >
            Фильмы
          </Button>
          <Button
            onClick={() => handleChangeType("2")}
            bg="#313131"
            color="white"
            _hover={{
              background: "#424242",
              color: "white",
            }}
          >
            Сериалы
          </Button>
          <Button
            onClick={() => handleChangeType("3")}
            bg="#313131"
            color="white"
            _hover={{
              background: "#424242",
              color: "white",
            }}
          >
            Мультики
          </Button>
        </div>
      </div>
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
                {/* <Spinner variant="dark" size={2} /> */}
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
