import { transformSession } from "@/bff/transformers";
import { RawSession, Session } from "@/types";

export const getSession = async (hash: string): Promise<Session | null> => {
  const response = await fetch(
    `http://localhost:3333/sessions?hash=${encodeURIComponent(hash)}`
  );

  const sessions: RawSession[] = await response.json();

  console.log(sessions)

  return sessions.length ? transformSession(sessions[0]) : null;
};
