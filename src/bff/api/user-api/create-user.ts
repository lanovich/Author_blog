import { RawUser } from "@/types";
import { generateDate } from "@/bff/utils";

export const createUser = async (login: string, password: string): Promise<RawUser> => {
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
