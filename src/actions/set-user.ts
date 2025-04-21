import { User } from "../types";
import { ACTION_TYPE } from "./action-type";

export const setUser = (user: Partial<User> | null) => ({
  type: ACTION_TYPE.SET_USER,
  payload: user,
});
