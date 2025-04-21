export const getCurrentUser = () => {
  const userDataRaw = sessionStorage.getItem("userData");
  return userDataRaw ? JSON.parse(userDataRaw).login : null;
};
