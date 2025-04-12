import { Action } from "redux";

const initialPostState = {};

export const postReducer = (
  state = initialPostState,
  action: { type: string; action: Action }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
