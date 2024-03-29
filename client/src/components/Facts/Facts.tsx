//import { Title } from "@/UI/Title/Title";
import { FC } from "react";
import { IFact } from "@/types/IFact";
import { classNames } from "@/helpers/classNames";
import styles from "./Facts.module.scss";

interface FilmFactsProps {
  facts: IFact[] | undefined;
}

export const Facts: FC<FilmFactsProps> = ({ facts }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Знаете ли вы, что…</h2>
      <ul className={classNames("list-reset", styles.facts)}>
        {facts?.map((el) => (
          <li
            key={el.value}
            className={styles.item}
            dangerouslySetInnerHTML={{ __html: el.value }}
          />
        ))}
      </ul>
    </div>
  );
};
