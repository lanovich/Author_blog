import { User } from "../types";
import { addSession, deleteSession, getSession } from "./api";

export const sessions = {
  create(user: User): string {
    const hash = Math.random().toString(36).substring(2, 15);

    addSession(hash, user);

    return hash;
  },

  async remove(hash: string) {
    const session = await getSession(hash);

    if (!session) return;

    deleteSession(session.id);
  },

  async access(hash: string, accessRoles: number[]) {
    const session = await getSession(hash);
    return !!session?.user && accessRoles.includes(Number(session.user.roleId));
  },
};
