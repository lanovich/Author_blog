import { Link } from "react-router-dom";
import { Icon } from "../../../shared";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div className={styles.logoContainer}>
        <Icon code={"fa-code"} fontSize={"70px"} margin={"-14px 0 0 0"} />
        <div>
          <div className={styles.largeText}>Блог</div>
          <div className={styles.smallText}>веб-разработчика</div>
        </div>
      </div>
    </Link>
  );
};
