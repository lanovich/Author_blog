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
      if (postData.res) {
        dispatch(setPostData(postData.res));
      }
      
      return postData;
    } catch (error) {
      console.error("Failed to load post:", error);
    }
  };
