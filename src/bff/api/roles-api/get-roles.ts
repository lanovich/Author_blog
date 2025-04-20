export const getRoles = () =>
  fetch("http://localhost:3333/roles").then((loadedRoles) => loadedRoles.json());
