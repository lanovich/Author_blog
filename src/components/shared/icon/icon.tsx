import React from "react";
import styles from "./icon.module.css";

interface Props {
  className?: string;
  code: string;
  fontSize?: React.CSSProperties["fontSize"];
  margin?: React.CSSProperties["margin"];
  onClick?: () => void;
  disabled?: boolean
}

export const Icon: React.FC<Props> = ({ className, code, fontSize, margin, onClick, disabled }) => {
  return (
    <div className={`${className} ${styles.wrapper} ${disabled ? styles.disabledIcon : ""}`} onClick={onClick}>
      <i
        className={`fa ${code} ${styles.icon}`}
        style={{
          fontSize,
          margin: margin,
        }}
        aria-hidden={true}
      />
    </div>
  );
};
