import { ACTION_TYPE } from "../actions";

interface AppState {
  wasLogout: boolean;
  modal: {
    text: string;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
  };
}

const initialAppState: AppState = {
  wasLogout: false,
  modal: {
    text: "",
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (
  state = initialAppState,
  action: { type: string; payload: any }
): AppState => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };

    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true,
        },
      };

    case ACTION_TYPE.CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...initialAppState.modal,
        },
      };

    default:
      return state;
  }
};
