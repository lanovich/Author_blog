import { getRoles } from "../api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const fetchRoles = async (userSession: string) => {
  const accessRoles = [ROLE_IDS.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  } else {
    const roles = await getRoles();

    return {
      error: null,
      res: roles,
    };
  }
};
