import { H2 } from "@/components/shared";
import styles from "./users.module.css";
import { Role, User } from "@/types";
import { UserRow } from "./user-row";
import { useServerRequest } from "@/hooks";
import { useEffect, useState } from "react";
import { ROLE_IDS } from "@/constants";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const requestServer = useServerRequest();

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage(null);
    
    Promise.all([requestServer("fetchUsers"), requestServer("fetchRoles")])
    .then(([usersRes, rolesRes]) => {
      if (usersRes.error || rolesRes.error) {
        setErrorMessage(usersRes.error || rolesRes.error);
        return;
      }
      setUsers(usersRes.res);
      setRoles(rolesRes.res);
      })
      .finally(() => setIsLoading(false));
  }, [requestServer, shouldUpdateUserList]);

  const onUserRemove = (userId: string) => {
    setIsLoading(true);
    requestServer("removeUser", userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList);
    });
  };

  const filteredRoles = roles.filter(
    ({ id: roleId }) => Number(roleId) !== ROLE_IDS.GUEST
  );

  if (isLoading) {
    return <div className={styles.container}>Загрузка...</div>;
  }

  return (
    <div className={styles.container}>
      {errorMessage ? (
        <>
          <H2>Ошибка</H2>
          <div>{errorMessage}</div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
