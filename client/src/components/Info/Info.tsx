import { FC, ReactNode } from "react";
import styles from "./Info.module.scss";

type InfoItem = {
  caption: string;
  condition: unknown;
  value: ReactNode;
};

interface InfoProps {
  items: InfoItem[];
}

export const Info: FC<InfoProps> = ({ items }) => {
  return (
    <ul className="list-reset">
      {items?.map((data) => (
        <li key={data.caption} className={styles.item}>
          <span className={styles.caption}>{data.caption}</span>
          {data.condition ? (
            <span className={styles.value}>{data.value}</span>
          ) : (
            "—"
          )}
        </li>
      ))}
    </ul>
  );
};
