import { RootState } from "@/store";

export const selectModalIsOpen = ({ app }: RootState) => app.modal.isOpen;
