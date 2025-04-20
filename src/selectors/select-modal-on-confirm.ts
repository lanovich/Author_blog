import { RootState } from "@/store";

export const selectModalOnConfirm = ({ app }: RootState) => app.modal.onConfirm;
