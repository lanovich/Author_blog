import { ACTION_TYPE } from "@/actions";
import { PostData } from "@/types";

const initialPostState: PostData = {
  id: "",
  title: "",
  imageUrl: "",
  content: "",
  publishedAt: "",
  comments: [],
};

export const postReducer = (
  state = initialPostState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
