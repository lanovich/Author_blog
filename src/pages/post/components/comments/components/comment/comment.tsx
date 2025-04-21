import { Icon } from "@/components/shared";
import { CommentDataWithAuthor } from "@/types";
import styles from "./comment.module.css";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL, openModal, removeCommentAsync } from "@/actions";
import { useServerRequest } from "@/hooks";

export const Comment: React.FC<CommentDataWithAuthor> = ({
  id,
  author,
  postId,
  content,
  publishedAt,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onCommentRemove = (id: string) => {
    dispatch(
      openModal({
        text: "Удалить комментарий?",
        onConfirm: () => {
          dispatch(CLOSE_MODAL),
          dispatch(removeCommentAsync(requestServer, postId, id) as any);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        <div className={styles.informationPanel}>
          <div className={styles.author}>
            <Icon code={"fa-user-circle-o"} margin={"0 10px 0 0"} fontSize={"18px"} />
            {author}
          </div>
          <div className={styles.publishedAt}>
            <Icon code={"fa-calendar-o"} margin={"0 7px 0 0"} fontSize={"18px"} />
            {publishedAt}
          </div>
        </div>
        <div className={styles.commentText}>{content}</div>
      </div>
      <Icon
        code="fa-trash-o"
        fontSize={"21px"}
        margin={"0 10px 0 10px"}
        onClick={() => {
          onCommentRemove(id);
        }}
      />
    </div>
  );
};
