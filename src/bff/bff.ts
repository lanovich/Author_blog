import { createSession } from "./create-session";
import { createUser } from "./create-user";
import { getUserByLogin } from "./get-user-by-login";

export const server = {
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
      res: createSession(user.role_id),
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
      res: createSession(newUser.role_id),
    };
  }
  
};
