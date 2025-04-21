import { Action } from "redux";

const initialPostsState = {};

export const postsReducer = (
  state = initialPostsState,
  action: { type: string; action: Action }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
