import { transformUser } from "../transformers";

export const getUsers = () =>
  fetch("http://localhost:3333/users")
    .then((loadedUsers) => loadedUsers.json()
    .then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser))
  );
