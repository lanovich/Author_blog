import styles from "./description.module.css";

interface Props {
  children: React.ReactNode;
}

export const Description: React.FC<Props> = ({ children }) => {
  return <div className={styles.descriptionContainer}>{children}</div>;
};
