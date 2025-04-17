export interface Session {
  logout?: () => void;
  deleteComment?: () => void;
}

export interface RawUser {
  id: number;
  login: string;
  password: string;
  registered_at: string;
  role_id: number;
}

export interface User {
  id: number;
  login: string;
  password: string;
  registeredAt: string;
  roleId: number;
}

export interface UserState {
  session: string;
  id: number;
  login: string;
  registeredAt: string;
  roleId: number;
}

export interface Role {
  id: number;
  name: number;
}

export type Users = User[];
