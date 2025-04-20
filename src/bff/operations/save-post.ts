import { ROLE_IDS } from "@/constants";
import { sessions } from "../sessions";
import { updatePost } from "../api";
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

  const updatedPost = await updatePost(newPostData);

  return {
    err: null,
    res: updatedPost,
  };
};
