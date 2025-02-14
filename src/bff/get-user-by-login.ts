import { User, Users } from "../types";

export const getUserByLogin = async (login: string): Promise<User | null> => {
  const response = await fetch(`http://localhost:3333/users?login=${encodeURIComponent(login)}`);
  
  const users: Users = await response.json();

  return users.length ? users[0] : null;
};
