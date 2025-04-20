import { Icon } from "@/components/shared";
import styles from "./special-panel.module.css";

export const SpecialPanel = ({ publishedAt, children}: { publishedAt: string; children?: React.ReactNode }) => {
  return (
    <div className={styles.specialPanel}>
      <div className={styles.publishedAt}>
        <Icon
          code={"fa-calendar-o"}
          margin={"0 20px 0 0"}
          onClick={() => {}}
          fontSize={"18px"}
        />
        {publishedAt}
      </div>
      <div className={styles.buttons}>
        {children}
        <Icon
          code={"fa-trash-o"}
          margin={"0 7px 0 0"}
          onClick={() => {}}
          fontSize={"21px"}
        />
      </div>
    </div>
  );
};
