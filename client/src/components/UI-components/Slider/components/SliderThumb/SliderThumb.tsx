import { FC, useMemo } from "react";
import { IThumbProps } from "react-range/lib/types";
import { classNames } from "@/helpers/classNames";
import styles from "./SliderThumb.module.scss";

interface SliderThumbProps {
  value: number;
  initialValue: number | undefined;
  props: IThumbProps;
}

export const SliderThumb: FC<SliderThumbProps> = ({
  value,
  initialValue,
  props,
}) => {
  const isChanged = useMemo(
    () => initialValue !== value,
    [initialValue, value]
  );

  return <div {...props} />;
};
