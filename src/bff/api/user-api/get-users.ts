import { transformUser } from "@/bff/transformers";

export const getUsers = () =>
  fetch("/api/users").then((loadedUsers) =>
    loadedUsers
      .json()
      .then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser))
  );
