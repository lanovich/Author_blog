import { User } from "@/types";

export const deleteUser = async (userId: string): Promise<User> => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
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
