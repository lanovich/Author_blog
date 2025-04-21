import { ACTION_TYPE } from "../actions";
import { ROLE_IDS } from "../constants";
import { User } from "../types";

interface UserState {
  session: string | null;
  id: number | null;
  login: string | null;
  roleId: number;
}

const initialUserState: UserState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE_IDS.GUEST,
};

type UserAction = { type: "SET_USER"; payload: Partial<User> | null };

export const userReducer = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPE.LOGOUT:
      return initialUserState;

    default:
      return state;
  }
};
