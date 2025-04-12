import { Action } from "redux";

const initialUsersState = {};

export const usersReducer = (
  state = initialUsersState,
  action: { type: string; action: Action }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
