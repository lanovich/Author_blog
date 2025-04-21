import { UserState } from "../types";

export const selectUserRole = ({ user }: { user: UserState }): number => user.roleId;
