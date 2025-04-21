import { User } from "@/types";

export const addSession = (hash: string, user: User) => {
  fetch("/api/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      hash,
      user,
    }),
  });
};
