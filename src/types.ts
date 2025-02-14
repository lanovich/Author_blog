export interface Session {
  logout?: () => void;
  deleteComment?: () => void;
}

export interface User {
  id: number;
  login: string;
  password: string;
  registered_at: string;
  role_id: number;
}

export type Users = User[]