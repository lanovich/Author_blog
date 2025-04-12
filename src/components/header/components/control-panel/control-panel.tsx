import { Link, useNavigate } from "react-router-dom";
import { Button, Icon } from "../../../shared";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors";
import { ROLE_IDS } from "../../../../constants";
import { logout } from "../../../../actions";
import styles from "./control-panel.module.css";

export const ControlPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const sessionHash = useSelector(selectUserSession);

  return (
    <div className={styles.container}>
      <div className={styles.buttonsRow}>
        {roleId === ROLE_IDS.GUEST ? (
          <Button width={76}>
            <Link to={"/login"}>Войти</Link>
          </Button>
        ) : (
          <>
            <div className={styles.login}>{login}</div>
            <div
              onClick={() => dispatch(logout(sessionHash))}
              className={styles.linkButton}
            >
              <Icon code="fa-sign-out" fontSize={"20px"} margin={"8px 0 0 0"} />
            </div>
          </>
        )}
      </div>
      <div className={styles.buttonsRow}>
        <div onClick={() => navigate(-1)} className={styles.linkButton}>
          <Icon code="fa-backward" fontSize={"20px"} />
        </div>
        <Link to={"/"}>
          <Icon code="fa-file-text-o" fontSize={"20px"} className={styles.linkButton} />
        </Link>
        <Link to={"/"}>
          <Icon code="fa-users" fontSize={"20px"} className={styles.linkButton} />
        </Link>
      </div>
    </div>
  );
};
