import { getUsers } from "../api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const fetchUsers = async (hash: string) => {
  if (!hash) {
    return {
      error: "Сессия не найдена. Пожалуйста, войдите снова.",
      res: null,
    };
  }
  
  const accessRoles = [ROLE_IDS.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен. Недостаточно прав.",
      res: null,
    };
  }

  try {
    const users = await getUsers();
    return {
      error: null,
      res: users,
    };
  } catch (error) {
    return {
      error: "Ошибка при загрузке пользователей",
      res: null,
    };
  }
};
