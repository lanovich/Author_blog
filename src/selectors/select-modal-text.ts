import { RootState } from "@/store";

export const selectModalText = ({ app }: RootState) => app.modal.text;
