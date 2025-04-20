import { getRoles } from "../api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const fetchRoles = async (hash: string) => {
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
    const roles = await getRoles();
    return {
      error: null,
      res: roles,
    };
  } catch (error) {
    return {
      error: "Ошибка при загрузке ролей",
      res: null,
    };
  }
};