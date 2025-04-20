import { setPostData } from ".";
import { AppThunk } from "@/store";

export const loadPostAsync =
  (
    requestServer: (operation: string, ...params: string[]) => Promise<any>,
    postId: string
  ): AppThunk =>
  async (dispatch) => {
    try {
      const postData = await requestServer("fetchPost", postId);
      dispatch(setPostData(postData.res));
    } catch (error) {
      console.error("Failed to load post:", error);
    }
  };
