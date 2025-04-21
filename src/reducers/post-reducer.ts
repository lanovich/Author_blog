import { ACTION_TYPE } from "@/actions";
import { PostData } from "@/types";

export const initialPostState: PostData = {
  id: "",
  title: "",
  imageUrl: "",
  content: "",
  publishedAt: "",
  comments: [],
};

type PostAction =
  | { type: typeof ACTION_TYPE.SET_POST_DATA; payload: Partial<PostData> }
  | { type: typeof ACTION_TYPE.RESET_POST_DATA };

export const postReducer = (state = initialPostState, action: PostAction): PostData => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...(action as any).payload,
      };
    case ACTION_TYPE.RESET_POST_DATA:
      return initialPostState;
    default:
      return state;
  }
};
