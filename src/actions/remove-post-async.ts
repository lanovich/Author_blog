import { PostData } from "@/types";

export const removePostAsync =
  (requestServer: any, postId: string) => async () => {
    try {
      const postData: { error: string | null; res: PostData | null } =
        await requestServer("removePost", postId);

      if (postData?.res) {
        return postData.res
      } else {
        console.warn("Ошибка при удалении поста:", postData?.error);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса removePost:", error);
    }
  };
