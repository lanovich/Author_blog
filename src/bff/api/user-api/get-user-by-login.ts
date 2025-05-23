import { RawUser, User } from "@/types";
import { transformUser } from "@/bff/transformers";

export const getUserByLogin = async (login: string): Promise<User | null> => {
  const response = await fetch(`/api/users?login=${encodeURIComponent(login)}`);

  const users: RawUser[] = await response.json();

  return users.length ? transformUser(users[0]) : null;
};
