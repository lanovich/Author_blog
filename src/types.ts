export interface Session {
  logout?: () => void;
  deleteComment?: () => void;
}

export interface RawUser {
  registeredAt?: string;
  roleId?: number;
  id: string;
  login: string;
  password: string;
  registered_at: string;
  role_id: number;
}

export interface User {
  id: string;
  login: string;
  password: string;
  registeredAt: string;
  roleId: number;
}

export interface UserState {
  session: string;
  id: string;
  login: string;
  registeredAt: string;
  roleId: number;
}

export interface Role {
  id: number;
  name: number;
}

export type Users = User[];

export interface RawPostData {
  id: string;
  title: string;
  image_url: string;
  content: string;
  published_at: string;
  comments: RawCommentData[];
}
export interface PostData {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
  publishedAt: string;
  comments: CommentDataWithAuthor[];
}

export interface PostDataDTO extends PostData {
  commentsCount: number;
}

export interface CommentData {
  id: string;
  content: string;
  postId: string;
  author: string;
  authorId: string;
  publishedAt: string;
}

export interface CommentDataWithAuthor extends CommentData {
  author: string;
}

export interface RawCommentData {
  id: string;
  content: string;
  author: string;
  author_id: string;
  post_id: string;
  published_at: string;
}

export interface RawSession {
  id: string;
  hash: string;
  user: RawUser;
}

export interface Session {
  id: string;
  hash: string;
  user: RawUser;
}

export interface NewPostData {
  id: string;
  imageUrl: string;
  postId: string;
  title: string;
  content: string;
}
