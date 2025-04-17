import { ROLE_IDS } from "@/constants";
import { deleteUser } from "../api";
import { sessions } from "../sessions";

export const removeUser = async (
  userSession: string,
  userId: number,
) => {
  const accessRoles = [ROLE_IDS.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  deleteUser(userId);

  return {
    err: null,
    res: true,
  };
};
