import { FC, useState } from "react";
import { ButtonBase } from "@/components/UI-components/ButtonBase/ButtonBase";
import { getReviewColor } from "@/helpers/getReviewColor";
import { IReview } from "@/types/IReview";
//import {convertTimestampToDate} from '@/helpers/convertTimestampToDate/convertTimestampToDate'
import { ReviewButtons } from "./components/ReviewButtons/ReviewButtons";
import { classNames } from "@/helpers/classNames";
import styles from "./ReviewItem.module.scss";

interface ReviewItemProps {
  item: IReview;
}

export const ReviewItem: FC<ReviewItemProps> = ({ item }) => {
  const { date, type, review, reviewDislikes, reviewLikes, title, author } =
    item;
  const [isTruncated, setIsTruncated] = useState<boolean>(true);

  const color = getReviewColor(type);

  return (
    <div className={classNames(styles.item)} style={{ backgroundColor: color }}>
      {" "}
      <div className={styles.content}>
        <p className={styles.author}>{author}</p>
        {title && <h3 className={styles.title}>{title}</h3>}
        <p
          className={classNames(styles.review, isTruncated && styles.truncated)}
        >
          {review}
        </p>
        <ButtonBase
          ripple
          animationDuration={400}
          className={styles.showMore}
          onClick={() => setIsTruncated((prev) => !prev)}
        >
          {isTruncated ? "Показать всю рецензию" : "Cкрыть рецензию"}
        </ButtonBase>
      </div>
      <div className={styles.bottom}>
        <span className={styles.date}>{date}</span>
        <ReviewButtons likes={reviewLikes} dislikes={reviewDislikes} />
      </div>
    </div>
  );
};
