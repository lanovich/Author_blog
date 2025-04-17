import { RawUser, User } from "@/types";

export const transformUser = (dbUser: RawUser): User => ({
    id: dbUser.id,
    login: dbUser.login,
    registeredAt: dbUser.registered_at,
    password: dbUser.password,
    roleId: dbUser.role_id,
})