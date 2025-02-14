import { ROLE_IDS } from "../constants";
import { Session } from "../types";
import { deleteComment } from "./session";

export const createSession = (roleId: number): Session => {
  const session: Session = {
    logout() {
      Object.setPrototypeOf(session, {});
    },
  };

  if (roleId === ROLE_IDS.ADMIN) {
    session.deleteComment = deleteComment;
  }
  if (roleId === ROLE_IDS.MODERATOR) {
    session.deleteComment = deleteComment;
  }

  return session;
};
