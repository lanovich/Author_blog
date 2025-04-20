import { generateDate } from "@/bff/utils";
import { NewPostData } from "@/types";

export const createPost = async ({ imageUrl, title, content }: NewPostData) => {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      image_url: imageUrl,
      title: title,
      content,
      published_at: generateDate(),
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создании комментария");
  }

  return response.json();
};
