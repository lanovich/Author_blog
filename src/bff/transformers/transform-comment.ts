import { CommentData, RawCommentData } from "@/types";

export const transformComment = (dbComment: RawCommentData): CommentData => ({
  id: dbComment.id,
  content: dbComment.content,
  postId: dbComment.post_id,
  author: dbComment.author,
  publishedAt: dbComment.published_at,
  authorId: dbComment.author_id,
});
