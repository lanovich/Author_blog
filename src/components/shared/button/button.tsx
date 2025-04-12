import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  error?: boolean;
  chidlren?: React.ReactNode;
  width?: number | string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  error,
  width,
  children,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${error ? styles.error : ""}`}
      {...props}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};
