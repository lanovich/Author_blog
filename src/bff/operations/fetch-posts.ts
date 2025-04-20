import { getComments, getPosts } from "../api";
import { calcCommentsCount } from "../utils";

export const fetchPosts = async () => {
  try {
    const [posts, comments] = await Promise.all([getPosts(), getComments()]);

    console.log(comments)

    return {
      error: null,
      res: posts?.map((post) => ({
        ...post,
        commentsCount: calcCommentsCount(comments, post.id),
      })),
    };
  } catch (error) {
    return {
      error: "Ошибка при загрузке постов",
      res: null,
    };
  }
};
