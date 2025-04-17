import { getUsers } from "../api";
import { ROLE_IDS } from "../constants";
import { sessions } from "../sessions";

export const fetchUsers = async (userSession: string) => {
  const accessRoles = [ROLE_IDS.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  } else {
    const roles = await getUsers();

    return {
      error: null,
      res: roles,
    };
  }
};
