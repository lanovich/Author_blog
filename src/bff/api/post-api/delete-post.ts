export const deletePost = async (postId: string) => {
  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Ошибка при удалении");
    }

    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Сетевая ошибка при удалении");
  }
};
