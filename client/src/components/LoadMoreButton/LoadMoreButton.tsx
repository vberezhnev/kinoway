import { FC, ButtonHTMLAttributes } from "react";
import { Button } from "@/components/UI-components/Button/Button";
import styles from "./LoadMoreButton.module.scss";

interface LoadMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  condition: boolean;
  isFetching: boolean;
}

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({
  condition,
  isFetching,
  className,
  ...props
}) => {
  return (
    <>
      {!condition && (
        <Button
          disabled={isFetching}
          className={`${styles.btn} ${className}`}
          {...props}
        >
          {isFetching ? "Загрузка..." : "Показать ещё"}
        </Button>
      )}
    </>
  );
};
