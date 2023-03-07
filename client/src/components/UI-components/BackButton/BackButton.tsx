import { useRouter } from "next/router";

import styles from "./BackButton.module.scss";
import { Button } from "@chakra-ui/react";

export const BackButton = () => {
  const router = useRouter();

  // <button className={styles.button} onClick={() => router.back()}>
  // ↫ Back
  // </button>

  return <Button onClick={() => router.back()}>↫ Back</Button>;
};
