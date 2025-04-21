import { Icon } from "@/components/shared";
import styles from "./special-panel.module.css";
import { CLOSE_MODAL, openModal, removePostAsync } from "@/actions";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { checkAccess } from "@/utils";
import { ROLE_IDS } from "@/constants";
import { selectUserRole } from "@/selectors";

export const SpecialPanel = ({
  publishedAt,
  postId,
  children,
}: {
  publishedAt: string;
  postId: string;
  children?: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const roleId = useSelector(selectUserRole);
  const navigate = useNavigate();

  const onPostRemove = (postId: string) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(CLOSE_MODAL);
          dispatch(removePostAsync(requestServer, postId) as any).then(() => {
            navigate("/");
          });
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  const isAdmin = checkAccess([ROLE_IDS.ADMIN], roleId);

  return isAdmin ? (
    <div className={styles.specialPanel}>
      <div className={styles.publishedAt}>
        {publishedAt && (
          <Icon code={"fa-calendar-o"} margin={"0 20px 0 0"} fontSize={"18px"} />
        )}
        {publishedAt}
      </div>
      <div className={styles.buttons}>
        {children}

        {publishedAt && (
          <Icon
            code={"fa-trash-o"}
            margin={"0 0 0 7px"}
            onClick={() => onPostRemove(postId)}
            fontSize={"21px"}
          />
        )}
      </div>
    </div>
  ) : null;
};
