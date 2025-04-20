import { PostData } from "@/types";
import { ACTION_TYPE } from "./action-type";

export const setPostData = (postData: PostData) => ({
  type: ACTION_TYPE.SET_POST_DATA,
  payload: postData,
});
