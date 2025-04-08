import React from "react";
import styles from "./icon.module.css";

interface Props {
  className?: string;
  code: string;
  fontSize?: React.CSSProperties["fontSize"];
  margin?: React.CSSProperties["margin"];
}

export const Icon: React.FC<Props> = ({ className, code, fontSize, margin }) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <i 
        className={`fa ${code} ${styles.icon}`}
        style={{
          fontSize,
          margin: margin
        }}
        aria-hidden={true}
      />
    </div>
  );
};
