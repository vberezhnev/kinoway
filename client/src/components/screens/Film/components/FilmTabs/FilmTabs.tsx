import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useGetMovieImagesQuery } from "@/services/KinowayService";
import { IMovie } from "@/types/IMovie";
import { Tabs } from "@/components/UI-components/Tabs/Tabs";
import { useRouter } from "next/router";
import { MainRoles } from "../index";
import { FC } from "react";
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

  // const { imagesLimit } = useTypedSelector((state) => state.loadReducer);

  const { data: images, isFetching: imagesFetching } = useGetMovieImagesQuery({
    id,
    limit: 12, //imagesLimit
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
      content: 123, // <Images isFetching={imagesFetching} data={images} />
      condition: images?.docs?.length,
    },
    {
      txt: "asd",
      content: 213,
    },
  ];

  return <Tabs tabs={tabs} />;
};
