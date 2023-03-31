import { useRouter } from "next/router";

import { Button } from "@chakra-ui/react";

export const BackButton = ({ ...props }: any) => {
  const router = useRouter();

  // <button className={styles.button} onClick={() => router.back()}>
  // ↫ Back
  // </button>

  return (
    <Button {...props} onClick={() => router.back()}>
      ↫ Back
    </Button>
  );
};
