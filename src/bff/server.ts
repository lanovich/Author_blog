import { sessions } from "../sessions";
import { User } from "../types";
import { getUserByLogin, createUser } from "./server-utils";

export const server = {
  async logout(sessionHash: string) {
    sessions.remove(sessionHash)
  },

  async authorize(authLogin: string, authPassword: string) {
    const user = await getUserByLogin(authLogin);

    if (!user) {
      return {
        error: "Такой пользователь не найден",
        res: null,
      };
    }

    if (!authPassword) {
      return {
        error: "Неверный пароль",
        res: null,
      };
    }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        registered_at: user.registered_at,
        session: sessions.create(user),
      } as Partial<User>,
    };
  },

  async register(regLogin: string, regPassword: string) {
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
        session: sessions.create(newUser),
      },
    };
  },
};
