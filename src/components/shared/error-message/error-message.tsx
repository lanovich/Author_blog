// error-message.tsx
import { ERROR_CODE } from "@/bff/constants";
import styles from "./error-message.module.css";
import { useLocation } from "react-router-dom";

type ErrorValue = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];

interface ErrorContent {
  image: string;
  alt: string;
}

const errorContentMap: Record<ErrorValue, ErrorContent> = {
  [ERROR_CODE.SESSION_NOT_FOUND]: {
    image: "/session-not-found.png",
    alt: "Session Not Found",
  },
  [ERROR_CODE.PAGE_NOT_EXIST]: {
    image: "/404.png",
    alt: "Page Not Exist",
  },
  [ERROR_CODE.ACCESS_DENIED]: {
    image: "/access-denied.png",
    alt: "Access Denied",
  },
};

const DEFAULT_ERROR_CONTENT: ErrorContent = {
  image: "/404.png",
  alt: "404 Not Found",
};

interface ErrorMessageProps {
  children?: React.ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const errorValue = typeof children === "string" ? children : "";
  const content =
    errorValue in errorContentMap
      ? errorContentMap[errorValue as ErrorValue]
      : DEFAULT_ERROR_CONTENT;

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        {children && <h2 className={styles.title}>{children}</h2>}
        <p className={styles.path}>Страница: {currentPath}</p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={content.image}
          alt={content.alt}
          width={300}
          height={300}
          className={styles.image}
          loading="lazy"
        />
      </div>
    </div>
  );
};
