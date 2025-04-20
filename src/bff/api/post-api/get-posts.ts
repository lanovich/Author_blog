import { transformPost } from "@/bff/transformers";
import { PostData, RawPostData } from "@/types";

export const getPosts = async (
  searchPhrase: string,
  page: number,
  limit: number
): Promise<{ posts: PostData[] | null; links: string | null }> => {
  try {
    const response = await fetch(`/api/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const [loadedPosts, links] = await Promise.all([
      response.json() as Promise<RawPostData[]>,
      response.headers.get("Link"),
    ]);

    return {
      posts: loadedPosts ? loadedPosts.map(transformPost) : null,
      links,
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return { posts: null, links: null };
  }
};
