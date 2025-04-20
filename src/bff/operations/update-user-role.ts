import { ROLE_IDS } from "@/constants";
import { setUserRole } from "../api";
import { sessions } from "../sessions";

export const updateUserRole = async (
  hash: string,
  userId: string,
  newUserRoleId: number
) => {
  const accessRoles = [ROLE_IDS.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
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
