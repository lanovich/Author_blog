import { UserState } from "../types";

export const selectUserId = ({ user }: { user: UserState }): string => user.id;
