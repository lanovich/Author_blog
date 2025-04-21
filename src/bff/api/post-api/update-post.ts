import { NewPostData } from "@/types";

export const updatePost = async ({ id, imageUrl, title, content }: NewPostData) => {
  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        image_url: imageUrl,
        title,
        content,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Ошибка при обновлении поста");
    }

    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Сетевая ошибка при обновлении поста");
  }
};
