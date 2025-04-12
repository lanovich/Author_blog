import styles from "./h2.module.css";

interface H2 {
  children: React.ReactNode;
}

export const H2: React.FC<H2> = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
