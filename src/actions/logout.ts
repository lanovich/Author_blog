import { server } from "../bff";
import { ACTION_TYPE } from "./action-type";

export const logout = (sessionHash: string) => {
  server.logout(sessionHash);

  return {
    type: ACTION_TYPE.LOGOUT,
  };
};
