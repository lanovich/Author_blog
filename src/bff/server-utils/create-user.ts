import { User } from "@/types";
import { generateDate } from "./generate-date";

export const createUser = async (login: string, password: string): Promise<User> => {
  const response = await fetch("http://localhost:3333/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      id: `${Math.floor(Math.random() * 100000)}`,
      login,
      password,
      registered_at: generateDate(),
      role_id: 2,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создании пользователя");
  }

  return response.json();
};
