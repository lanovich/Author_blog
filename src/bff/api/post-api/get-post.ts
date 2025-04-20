import { transformPost } from "@/bff/transformers";
import { PostData, RawPostData } from "@/types";

export const getPost = async (postId: string): Promise<PostData | null> => {
  const response = await fetch(`/api/posts/${encodeURIComponent(postId)}`);

  const post: RawPostData = await response.json();

  return post ? transformPost(post) : null;
};
