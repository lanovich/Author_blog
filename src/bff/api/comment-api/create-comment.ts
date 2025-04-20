import { generateDate } from "@/bff/utils";

export const createComment = async (
  userId: string,
  postId: string,
  author: string,
  content: string
) => {
  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      post_id: postId,
      author_id: userId,
      author: author,
      published_at: generateDate(),
      content,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создании комментария");
  }

  return response.json();
};
