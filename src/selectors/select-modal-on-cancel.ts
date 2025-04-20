import { RootState } from "@/store";

export const selectModalOnCancel = ({ app }: RootState) => app.modal.onCancel;
