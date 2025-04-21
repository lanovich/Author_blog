import { ERROR_CODE } from "@/bff/constants";
import { transformPost } from "@/bff/transformers";
import { PostData, RawPostData } from "@/types";

export const getPost = async (postId: string): Promise<PostData | null> => {
  const response = await fetch(`/api/posts/${encodeURIComponent(postId)}`);

  if (response.ok) {
    const post: RawPostData = await response.json();
    return post ? transformPost(post) : null;
  }

  const errorMessage =
    response.status === 404 ? ERROR_CODE.PAGE_NOT_EXIST : "Что-то пошло не так";

  return Promise.reject(errorMessage);
};
