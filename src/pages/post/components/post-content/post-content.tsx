import { H2, Icon } from "@/components/shared";
import { PostData } from "@/types";
import styles from "./post-content.module.css";
import { useNavigate } from "react-router-dom";
import { SpecialPanel } from "../special-panel/special-panel";

interface Props {
  post: PostData;
}

export const PostContent: React.FC<Props> = ({ post }) => {
  const { id, content, imageUrl, publishedAt, title } = post;
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <img src={imageUrl ? imageUrl : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} alt={title} className={styles.image} />
      <H2>{title}</H2>
      <SpecialPanel publishedAt={publishedAt} postId={id}>
        <Icon
          code={"fa-pencil-square-o"}
          margin={"0 20px 0 0"}
          onClick={() => navigate(`/post/${id}/edit`)}
          fontSize={"21px"}
        />
      </SpecialPanel>
      <div className={styles.content}>{content}</div>
    </div>
  );
};
