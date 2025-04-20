import { transformComment } from "@/bff/transformers";
import { CommentData, RawCommentData } from "@/types";

export const getComments = async (postId: string): Promise<CommentData[] | []> => {
  const response = await fetch(`/api/comments?post_id=${encodeURIComponent(postId)}`);

  const comments: RawCommentData[] = await response.json();

  return comments.length ? comments.map((comment) => transformComment(comment)) : [];
};
