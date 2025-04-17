import { User } from "../types";

export const sessions = {
  list: {} as Record<string, User>,

  create(user: User): string {
    const hash = Math.random().toString(36).substring(2, 15);
    this.list[hash] = user;
    return hash;
  },

  remove(hash: string) {
    delete this.list[hash];
  },

  access(hash: string, accessRoles: number[]) {
    const user = this.list[hash];
    return !!user && accessRoles.includes(user.roleId);
  },
};
