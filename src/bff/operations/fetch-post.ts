import { Users } from "@/types";
import { getComments, getPost, getUsers } from "../api";

export const fetchPost = async (postId: string) => {
  const post = await getPost(postId);

  const comments = await getComments(postId);
  const users: Users = await getUsers();
  
  const commentsWithAuthor = comments?.map((comment) => {
    const user = users.find(({ id }) => id === comment.authorId);
    return {
      ...comment,
      author: user?.login,
    };
  });

  return {
    error: null,
    res: { ...post, comments: commentsWithAuthor },
  };
};
