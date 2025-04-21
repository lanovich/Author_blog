import { RawSession, Session } from "@/types";

export const transformSession = (dbSession: RawSession): Session => ({
  id: dbSession.id,
  hash: dbSession.hash,
  user: dbSession.user,
});
