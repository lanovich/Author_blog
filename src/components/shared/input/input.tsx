import styles from "./input.module.css";
import { forwardRef, Ref } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = forwardRef(
  ({ className, error, width, ...props }, ref) => {
    return (
      <input
        className={`${styles.input} ${error ? styles.error : ""}`}
        {...props}
        style={{ width: width }}
        ref={ref}
      />
    );
  }
);
