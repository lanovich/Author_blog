import { User } from "@/types";
import { getUserByLogin, createUser } from "../api";
import { sessions } from "../sessions";

export const register = async (regLogin: string, regPassword: string) => {
  const existingUser = await getUserByLogin(regLogin);

  if (existingUser) {
    return {
      error: "Такой пользователь уже существует",
      res: null,
    };
  }

  const newUser = await createUser(regLogin, regPassword);

  return {
    error: null,
    res: {
      id: newUser.id,
      login: newUser.login,
      roleId: newUser.role_id,
      session: sessions.create(newUser as User),
    },
  };
};
