import { CommentData } from "@/types";

export const calcCommentsCount = (comments: CommentData[], postId: string) => {
  const postComments = comments.filter(({ postId: commentPostId }) => {
    return commentPostId === postId;
  });

  return postComments.length;
};
