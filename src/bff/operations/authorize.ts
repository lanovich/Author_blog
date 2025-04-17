import { User } from "@/types";
import { getUserByLogin } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authLogin: string, authPassword: string) => {
  const user = await getUserByLogin(authLogin);

  if (!user) {
    return {
      error: "Такой пользователь не найден",
      res: null,
    };
  }

  const { id, login, password, roleId } = user;

  if (authPassword !== password) {
    return {
      error: "Неверный пароль",
      res: null,
    };
  }
  return {
    error: null,
    res: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    } as Partial<User>,
  };
};
