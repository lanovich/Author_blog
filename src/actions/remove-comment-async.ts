import { PostData } from "@/types";
import { setPostData } from "./set-post-data";

export const removeCommentAsync =
  (requestServer: any, postId: string, id: string) =>
  async (dispatch: any) => {
    try {
      const postData: { error: string | null; res: PostData | null } =
        await requestServer("removePostComment", postId, id);

      if (postData?.res) {
        dispatch(setPostData(postData.res));
      } else {
        console.warn("Ошибка при удалении комментария:", postData?.error);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса removePostComment:", error);
    }
  };
