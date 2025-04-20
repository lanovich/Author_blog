import { deleteComment, deletePost, getComments } from "../api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const removePost = async (
  hash: string,
  postId: string
): Promise<{ error: string | null; res: any | null }> => {
  const accessRoles = [ROLE_IDS.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await deletePost(postId);

  const comments = await getComments(postId);
  await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

  return {
    error: null,
    res: true,
  };
};
