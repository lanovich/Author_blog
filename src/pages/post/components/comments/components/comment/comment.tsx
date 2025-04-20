import { Icon } from "@/components/shared";
import { CommentDataWithAuthor } from "@/types";
import styles from "./comment.module.css";

export const Comment: React.FC<CommentDataWithAuthor> = ({
  author,
  content,
  publishedAt,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        <div className={styles.informationPanel}>
            <div className={styles.author}>
              <Icon
                code={"fa-user-circle-o"}
                margin={"0 10px 0 0"}
                fontSize={"18px"}
                onClick={() => {}}
              />
            {author}
          </div>
          <div className={styles.publishedAt}>
            <Icon
              code={"fa-calendar-o"}
              margin={"0 7px 0 0"}
              fontSize={"18px"}
              onClick={() => {}}
            />
            {publishedAt}
          </div>
        </div>
        <div className={styles.commentText}>{content}</div>
      </div>
      <Icon
        code="fa-trash-o"
        fontSize={"21px"}
        margin={"0 10px 0 10px"}
        onClick={() => {}}
      />
    </div>
  );
};
