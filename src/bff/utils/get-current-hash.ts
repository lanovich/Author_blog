export const getCurrentHash = () => {
  const userDataRaw = sessionStorage.getItem("userData");
  return userDataRaw ? JSON.parse(userDataRaw).session : null;
};
