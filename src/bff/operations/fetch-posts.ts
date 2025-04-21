import { PostDataDTO } from "@/types";
import { getComments, getPosts } from "../api";
import { calcCommentsCount } from "../utils";

export const fetchPosts = async (
  searchPhrase: string,
  page: number,
  limit: number
): Promise<{
  error: null | string;
  res: { posts: PostDataDTO[] | null; links: string | null };
}> => {
  try {
    const [{ posts, links }, comments] = await Promise.all([
      getPosts(searchPhrase, page, limit),
      getComments(),
    ]);

    const fullPosts = posts?.map((post) => ({
      ...post,
      commentsCount: calcCommentsCount(comments, post.id),
    }));

    return {
      error: null,
      res: {
        posts: fullPosts || null,
        links: links,
      },
    };
  } catch (error) {
    return {
      error: "Ошибка при загрузке постов",
      res: { posts: null, links: null },
    };
  }
};
