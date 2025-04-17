import { authorize, logout, register, fetchRoles, fetchUsers, removeUser } from "./operations";
import { updateUserRole } from "./operations/update-user-role";

export const server = {
  authorize,
  logout,
  register,
  fetchRoles,
  fetchUsers,
  updateUserRole,
  removeUser
};
