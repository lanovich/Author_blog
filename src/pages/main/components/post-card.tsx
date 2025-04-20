import { Link } from "react-router-dom";
import styles from "./post-card.module.css";
import { Icon } from "@/components/shared";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  commentsCount: number;
}

export const PostCard: React.FC<Props> = ({
  id,
  title,
  publishedAt,
  commentsCount,
  imageUrl,
}) => {
  return (
    <Link to={`/post/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={imageUrl} alt={title} className={styles.img} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Icon code="fa-calendar-o" className={styles.icon} margin={0} />
            <span>Опубликовано: {publishedAt}</span>
          </span>
          <span className={styles.metaItem}>
            <Icon code="fa-comment-o" className={styles.icon} margin={0} />
            <span>Комментариев: {commentsCount}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};
