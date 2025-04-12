import { Action } from "redux";
import { ACTION_TYPE } from "../actions";

interface AppState {
  wasLogout: boolean;
}

const initialAppState: AppState = {
  wasLogout: false,
};

export const appReducer = (state = initialAppState, action: Action<string>): AppState => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };
    default:
      return state;
  }
};
