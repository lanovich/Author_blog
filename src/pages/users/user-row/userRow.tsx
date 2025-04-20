import styles from "./userRow.module.css";
import { Icon } from "@/components/shared";
import { useServerRequest } from "@/hooks";
import { Role } from "@/types";
import { ChangeEvent, useState } from "react";

interface Props {
  login: string;
  id: string;
  registeredAt: string;
  roleId: number;
  onUserRemove: () => void;
  roles: Role[];
}

export const UserRow: React.FC<Props> = ({
  id: userId,
  login,
  registeredAt,
  roleId: userRoleId,
  onUserRemove,
  roles,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();

  const onRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoleId(Number(e.target.value));
  };

  const onRoleSave = (userId: string, newUserRoleId: number) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };

  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  return (
    <div className={styles.tableRow}>
      <div className={styles.loginColumn}>{login}</div>
      <div className={styles.registeredAt}>{registeredAt}</div>
      <div className={styles.roleContainer}>
        <select
          className={styles.roleSelect}
          value={selectedRoleId}
          onChange={onRoleChange}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
              {role.id === userRoleId && " ▼"}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.buttonsContainer}>
        <span className={styles.saveButton}>
          <Icon
            code="fa-check"
            disabled={isSaveButtonDisabled}
            onClick={() => onRoleSave(userId, selectedRoleId)}
          />
        </span>
        <span className={styles.deleteButton}>
          <Icon code="fa-trash-o" onClick={onUserRemove} />
        </span>
      </div>
    </div>
  );
};
