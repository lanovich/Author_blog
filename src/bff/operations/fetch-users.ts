import { getUsers } from "../api";
import { ERROR_CODE, ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const fetchUsers = async (hash: string) => {
  if (!hash) {
    return {
      error: ERROR_CODE.SESSION_NOT_FOUND,
      res: null,
    };
  }

  const accessRoles = [ROLE_IDS.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: ERROR_CODE.ACCESS_DENIED,
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
