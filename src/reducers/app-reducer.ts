import { ACTION_TYPE } from "../actions";

export interface ModalState {
  text: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface AppState {
  wasLogout: boolean;
  modal: ModalState;
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

type AppAction =
  | { type: typeof ACTION_TYPE.LOGOUT }
  | { type: typeof ACTION_TYPE.OPEN_MODAL; payload: Partial<ModalState> }
  | { type: typeof ACTION_TYPE.CLOSE_MODAL };

export const appReducer = (state = initialAppState, action: AppAction): AppState => {
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
          ...(action as any).payload,
          isOpen: true,
        },
      };

    case ACTION_TYPE.CLOSE_MODAL:
      return {
        ...state,
        modal: initialAppState.modal,
      };

    default:
      return state;
  }
};
