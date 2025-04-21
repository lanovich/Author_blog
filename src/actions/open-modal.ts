import { ACTION_TYPE } from "./action-type";

export const openModal = (modalParams: {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => ({
  type: ACTION_TYPE.OPEN_MODAL,
  payload: modalParams,
});
