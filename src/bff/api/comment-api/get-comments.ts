import { transformComment } from "@/bff/transformers";
import { CommentData, RawCommentData } from "@/types";

export const getComments = async (postId?: string): Promise<CommentData[] | []> => {
  const URL = postId
    ? `/api/comments?post_id=${encodeURIComponent(postId)}`
    : "/api/comments";
  const response = await fetch(URL);

  const comments: RawCommentData[] = await response.json();

  return comments.length ? comments.map((comment) => transformComment(comment)) : [];
};
