import { FC } from "react";
import { useRouter } from "next/router";

import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useGetMovieImagesQuery } from "@/services/KinowayService";

import { IMovie } from "@/types/IMovie";
import { Images } from "../index";
import { MainRoles } from "../index";

import { Tabs } from "@/components/UI-components/Tabs/Tabs";
import { Facts } from "@/components/Facts/Facts";

import styles from "./FilmTabs.module.scss";

interface FilmTabsProps {
  data: IMovie | undefined;
}

export const FilmTabs: FC<FilmTabsProps> = ({ data }) => {
  const { persons, description, facts } = { ...data };

  const {
    query: { id },
  } = useRouter();

  //const { imagesLimit } = useTypedSelector((state) => state.loadReducer);

  const { data: images, isFetching: imagesFetching } = useGetMovieImagesQuery({
    id,
    limit: 8, // imagesLimit
  });

  const roles = persons?.filter((el) => {
    if (el.enProfession === "actor" && el.name?.length) {
      return el;
    }
  });

  const tabs = [
    {
      txt: "Описание",
      content: <p className={styles.desc}>{description}</p>,
      condition: description,
    },
    {
      txt: "Актёры",
      content: <MainRoles roles={roles} />,
      condition: roles?.length,
    },
    {
      txt: "Факты",
      content: <Facts facts={facts} />,
      condition: facts?.length,
    },
    {
      txt: "Изображения",
      content: <Images isFetching={imagesFetching} data={images} />,
      condition: images?.docs?.length,
    },
  ];

  return <Tabs tabs={tabs} />;
};
