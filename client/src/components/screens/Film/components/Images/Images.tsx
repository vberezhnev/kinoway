import { FC } from "react";
import Image from "next/image";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

import { LoadMoreButton } from "@/components/LoadMoreButton/LoadMoreButton";
import { useActions } from "@/hooks/useActions";

import { IImages } from "@/types/IImages";

import styles from "./Images.module.scss";

interface ImagesProps {
		data: IImages | undefined;
  isFetching: boolean;
}

export const Images: FC<ImagesProps> = ({ data, isFetching }) => {
  const { docs, total } = { ...data };

  const condition = data?.docs?.length === data?.total;

	//@ts-ignore
  const { loadMoreImages } = useActions();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Изображения <span>({total})</span>
      </h2>
      <LightGallery
        plugins={[lgZoom]}
        download={false}
        elementClassNames={styles.wrapper}
        speed={500}
      >
        {docs?.map((image, idx) => {
          return (
            <a className={styles.item} key={idx} href={image.url}>
              <Image
                layout="fill"
                className={styles.image}
                src={image.url}
                alt=""
              />
            </a>
          );
        })}
      </LightGallery>
      <LoadMoreButton
        className={styles.btn}
        isFetching={isFetching}
        condition={condition}
        onClick={() => loadMoreImages()}
      />
    </div>
  );
};
