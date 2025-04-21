import { Icon } from "@/components/shared";
import { CommentDataWithAuthor } from "@/types";
import styles from "./comment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, openModal, removeCommentAsync } from "@/actions";
import { useServerRequest } from "@/hooks";
import { selectUserRole } from "@/selectors";
import { checkAccess } from "@/utils";
import { ROLE_IDS } from "@/constants";

export const Comment: React.FC<CommentDataWithAuthor> = ({
  id,
  author,
  postId,
  content,
  publishedAt,
}) => {
  const dispatch = useDispatch();
  const userRole = useSelector(selectUserRole);
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

  const isAdminOrModerator = checkAccess([ROLE_IDS.ADMIN, ROLE_IDS.MODERATOR], userRole);

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
      {isAdminOrModerator && (
        <Icon
          code="fa-trash-o"
          fontSize={"21px"}
          margin={"0 10px 0 10px"}
          onClick={() => {
            onCommentRemove(id);
          }}
        />
      )}
    </div>
  );
};
