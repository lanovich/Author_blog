import { ROLE_IDS } from "@/constants";
import { sessions } from "../sessions";
import { createPost, updatePost } from "../api";
import { NewPostData } from "@/types";

export const savePost = async (hash: string, newPostData: NewPostData) => {
  const accessRoles = [ROLE_IDS.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  const savedPost =
    !newPostData.id ? await createPost(newPostData) : await updatePost(newPostData);

  return {
    err: null,
    res: savedPost,
  };
};
