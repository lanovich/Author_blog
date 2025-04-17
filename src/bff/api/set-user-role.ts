import { User } from "@/types";

export const setUserRole = async (userId: number, roleId: number): Promise<User> => {
  try {
    const response = await fetch(`http://localhost:3333/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        role_id: roleId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Ошибка при обновлении роли");
    }

    return response.json();
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Сетевая ошибка при обновлении роли");
  }
};
