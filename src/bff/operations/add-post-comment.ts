import { createComment, getComments, getPost } from "@/bff/api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const addPostComment = async (
  hash: string,
  userId: string,
  postId: string,
  author: string,
  content: string
): Promise<{ error: string | null; res: any | null }> => {
  const accessRoles = [ROLE_IDS.ADMIN, ROLE_IDS.MODERATOR, ROLE_IDS.READER];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await createComment(userId, postId, author, content);

  const post = await getPost(postId);
  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
