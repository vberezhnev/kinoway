import { RoutesEnum } from "../../../constants/routes";
import { useRouter } from "next/router";

import styles from "./BackButton.module.scss";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      onClick={() => router.push(RoutesEnum.Home)}
    >
      ◄
    </button>
  );
};
