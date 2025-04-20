import { PostData, RawPostData } from "@/types";

export const transformPost = (dbPost: RawPostData): PostData => ({
  id: dbPost.id,
  comments: dbPost.comments,
  content: dbPost.content,
  imageUrl: dbPost.image_url,
  publishedAt: dbPost.published_at,
  title: dbPost.title,
});
