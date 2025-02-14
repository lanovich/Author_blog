export const getUsers = () =>
  fetch("http://localhost:3333/users").then((loadedUsers) =>
    loadedUsers.json()
  );
