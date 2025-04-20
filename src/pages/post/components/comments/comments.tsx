import { useState } from "react";
import styles from "./comments.module.css";
import { Icon } from "@/components/shared";
import { Comment } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "@/selectors";
import { addCommentAsync } from "@/actions";
import { useServerRequest } from "@/hooks";
import { CommentDataWithAuthor } from "@/types";
import { getCurrentUser } from "@/bff/utils/get-current-user";

interface Props {
  postId: string;
  comments: CommentDataWithAuthor[];
}

export const Comments: React.FC<Props> = ({ comments, postId }) => {
  const [newComment, setNewComment] = useState<string>("");
  const userId = useSelector(selectUserId);
  const requestServer = useServerRequest();
  const dispatch = useDispatch();
  const currentUser = getCurrentUser();

  const onNewCommentAdd = (
    userId: string,
    postId: string,
    author: string,
    content: string,
  ) => {
    dispatch(addCommentAsync(requestServer, userId, postId, author, content) as any);
  };

  return (
    <div className={styles.container}>
      <div className={styles.newComment}>
        <textarea
          value={newComment}
          placeholder="Комментарий..."
          onChange={({ target }) => setNewComment(target.value)}
          className={styles.textArea}
        />
        <Icon
          code={"fa-paper-plane-o"}
          margin={"0 7px 0 0"}
          fontSize={"18px"}
          onClick={() => {
            if (!currentUser || !userId) {
              alert("Авторизуйтесь, чтобы оставить комментарий");
              return;
            }
            onNewCommentAdd(userId, postId, currentUser, newComment);
            setNewComment("");
          }}
        />
      </div>

      <div className={styles.comments}>
        {comments ? comments.map(({ id, author, content, publishedAt, authorId }) => (
          <Comment
            key={id}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
            authorId={authorId}
            postId={postId}
          />
        )) : null}
      </div>
    </div>
  );
};
