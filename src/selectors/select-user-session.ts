import { UserState } from "../types";

export const selectUserSession = ({ user }: { user: UserState }): string => {
  return user.session;
};
