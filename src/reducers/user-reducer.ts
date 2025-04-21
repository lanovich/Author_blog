import { ACTION_TYPE } from "../actions";
import { ROLE_IDS } from "../constants";
import { User } from "../types";

export interface UserState {
  session: string | null;
  id: number | null;
  login: string | null;
  roleId: number;
}

export const initialUserState: UserState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE_IDS.GUEST,
};

type UserAction =
  | { type: typeof ACTION_TYPE.SET_USER; payload: Partial<User> | null }
  | { type: typeof ACTION_TYPE.LOGOUT }
  | { type: string };

export const userReducer = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...(action as any).payload,
      };

    case ACTION_TYPE.LOGOUT:
      return initialUserState;

    default:
      return state;
  }
};
