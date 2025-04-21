import { H2, PrivateContent } from "@/components/shared";
import styles from "./users.module.css";
import { Role, User } from "@/types";
import { UserRow } from "./user-row";
import { useServerRequest } from "@/hooks";
import { useEffect, useState } from "react";
import { ROLE_IDS } from "@/constants";
import { checkAccess } from "@/utils";
import { useSelector } from "react-redux";
import { selectUserRole } from "@/selectors";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
  const userRole = useSelector(selectUserRole);

  const requestServer = useServerRequest();

  useEffect(() => {
    if (!checkAccess([ROLE_IDS.ADMIN], userRole)) return;
    setErrorMessage(null);

    Promise.all([requestServer("fetchUsers"), requestServer("fetchRoles")]).then(
      ([usersRes, rolesRes]) => {
        if (usersRes.error || rolesRes.error) {
          setErrorMessage(usersRes.error || rolesRes.error);
          return;
        }
        setUsers(usersRes.res);
        setRoles(rolesRes.res);
      }
    );
  }, [requestServer, shouldUpdateUserList, userRole]);

  console.log(users, roles);

  const onUserRemove = (userId: string) => {
    if (!checkAccess([ROLE_IDS.ADMIN], userRole)) return;
    requestServer("removeUser", userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList);
    });
  };

  const filteredRoles = roles.filter(
    ({ id: roleId }) => Number(roleId) !== ROLE_IDS.GUEST
  );

  console.log(errorMessage);

  return (
    users &&
    roles && (
      <>
          <PrivateContent access={[ROLE_IDS.ADMIN]} serverError={errorMessage}>
        <div className={styles.container}>
            <H2>Пользователи</H2>
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <div>Логин</div>
                <div>Дата регистрации</div>
                <div>Роль</div>
                <div></div>
              </div>

              {users.map((user) => (
                <UserRow
                  key={user.id}
                  id={user.id}
                  login={user.login}
                  registeredAt={user.registeredAt}
                  roleId={user.roleId}
                  roles={filteredRoles}
                  onUserRemove={() => onUserRemove(user.id)}
                />
              ))}
            </div>
        </div>
          </PrivateContent>
      </>
    )
  );
};
