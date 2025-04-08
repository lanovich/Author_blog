import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../shared";
import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.buttonsRow}>
        <Link to={"/login"}>
          <button className={styles.loginButton}>Войти</button>
        </Link>
      </div>
      <div className={styles.buttonsRow}>
        <div onClick={() => navigate(-1)} className={styles.linkButton}>
          <Icon code="fa-backward" fontSize={"20px"}/>
        </div>
        <Link to={"/"}>
          <Icon code="fa-file-text-o" fontSize={"20px"} className={styles.linkButton}/>
        </Link>
        <Link to={"/"}>
          <Icon code="fa-users" fontSize={"20px"} className={styles.linkButton}/>
        </Link>
      </div>
    </div>
  );
};
