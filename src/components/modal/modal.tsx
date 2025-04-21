import styles from "./modal.module.css";
import { Button } from "../shared";
import { useSelector } from "react-redux";
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
} from "@/selectors";

export const Modal = () => {
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);
  const isOpen = useSelector(selectModalIsOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.box}>
        <h3 className={styles.heading}>{text}</h3>
        <div className={styles.buttons}>
          <Button width={"120px"} onClick={onConfirm}>
            Да
          </Button>
          <Button width={"120px"} onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};
