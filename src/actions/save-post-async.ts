import { AppThunk } from "@/store";
import { setPostData } from "./set-post-data";

export const savePostAsync: any =
  (
    requestServer: (operation: string, ...params: string[]) => Promise<any>,
    newPostData: string
  ): AppThunk =>
  async (dispatch) => {
    try {
      const updatedPost = await requestServer("savePost", newPostData);
      dispatch(setPostData(updatedPost.res));
      return updatedPost.res;
    } catch (error) {
      console.error("Failed to load post:", error);
    }
  };
