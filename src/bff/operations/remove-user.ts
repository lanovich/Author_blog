import { ROLE_IDS } from "@/constants";
import { deleteUser } from "../api";
import { sessions } from "../sessions";

export const removeUser = async (hash: string, userId: string) => {
  const accessRoles = [ROLE_IDS.ADMIN];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
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
