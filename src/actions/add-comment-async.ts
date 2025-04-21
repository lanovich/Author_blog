import { PostData } from "@/types";
import { setPostData } from "./set-post-data";

export const addCommentAsync =
  (requestServer: any, userId: string, postId: string, author: string, content: string) =>
  async (dispatch: any) => {
    try {
      const postData: { error: string | null; res: PostData | null } =
        await requestServer("addPostComment", userId, postId, author, content);

      if (postData?.res) {
        dispatch(setPostData(postData.res));
      } else {
        console.warn("Ошибка при добавлении комментария:", postData?.error);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса addPostComment:", error);
    }
  };
