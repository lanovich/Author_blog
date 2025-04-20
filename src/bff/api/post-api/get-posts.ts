import { transformPost } from "@/bff/transformers";
import { PostData, RawPostData } from "@/types";

export const getPosts = async (): Promise<PostData[] | null> => {
  const response = await fetch(`/api/posts`);

  const posts: RawPostData[] = await response.json();

  return posts ? posts.map((post) => transformPost(post)) : null;
};
