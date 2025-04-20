export const getRoles = () =>
  fetch("/api/roles").then((loadedRoles) => loadedRoles.json());
