import { UserState } from "../types";

export const selectUserLogin = ({ user }: { user: UserState }): string | null => user.login;
