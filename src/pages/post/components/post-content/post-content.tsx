import { H2, Icon } from "@/components/shared";
import { PostData } from "@/types";
import styles from "./post-content.module.css";

interface Props {
  post: PostData;
}

export const PostContent: React.FC<Props> = ({ post }) => {
  const { content, imageUrl, publishedAt, title } = post;

  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <H2>{title}</H2>
      <div className={styles.specialPanel}>
        <div className={styles.publishedAt}>
          <Icon
            code={"fa-calendar-o"}
            margin={"0 20px 0 0"}
            onClick={() => {}}
            fontSize={"18px"}
          />
          {publishedAt}
        </div>
        <div className={styles.buttons}>
          <Icon
            code={"fa-pencil-square-o"}
            margin={"0 20px 0 0"}
            onClick={() => {}}
            fontSize={"21px"}
          />
          <Icon
            code={"fa-trash-o"}
            margin={"0 7px 0 0"}
            onClick={() => {}}
            fontSize={"21px"}
          />
        </div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
