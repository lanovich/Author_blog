import { User } from "./types";

interface Session {
  user: User;
}

export const sessions = {
  list: {} as Record<string, Session>,

  create(user: User): string {
    const hash = Math.random().toString(36).substring(2, 15);

    this.list[hash] = { user };

    return hash;
  },
  remove(hash: string) {
    delete this.list[hash];
  },
};
