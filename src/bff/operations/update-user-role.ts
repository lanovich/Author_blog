import { ROLE_IDS } from "@/constants";
import { setUserRole } from "../api";
import { sessions } from "../sessions";

export const updateUserRole = async (
  userSession: string,
  userId: number,
  newUserRoleId: number
) => {
  const accessRoles = [ROLE_IDS.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  setUserRole(userId, newUserRoleId);

  return {
    err: null,
    res: true,
  };
};
