import { sessions } from "../sessions";

export const logout = async (sessionHash: string) => {
  sessions.remove(sessionHash);
};
