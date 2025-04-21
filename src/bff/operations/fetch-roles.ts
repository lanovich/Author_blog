import { getRoles } from "../api";
import { ERROR_CODE, ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const fetchRoles = async (hash: string) => {
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
