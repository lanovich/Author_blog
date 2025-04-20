import { deleteComment, getComments, getPost } from "@/bff/api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const removePostComment = async (
  hash: string,
  postId: string,
  id: string
): Promise<{ error: string | null; res: any | null }> => {
  const accessRoles = [ROLE_IDS.ADMIN, ROLE_IDS.MODERATOR];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await deleteComment(id);

  const post = await getPost(postId);
  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
