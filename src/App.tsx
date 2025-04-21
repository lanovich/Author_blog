import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import styles from "./App.module.css";
import { Authorization, Main, Post, Registration, Users } from "./pages";
import { useLayoutEffect } from "react";
import { setUser } from "./actions";
import { useDispatch } from "react-redux";
import { Modal } from "./components";
import { ERROR_CODE } from "./bff/constants";
import { ErrorMessage } from "./components/shared";

export const Blog = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");

    if (!currentUserDataJSON) return;

    const currentUserData = JSON.parse(currentUserDataJSON);

    dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/:postId/edit" element={<Post />} />
          <Route
            path="*"
            element={<ErrorMessage>{ERROR_CODE.PAGE_NOT_EXIST}</ErrorMessage>}
          />
        </Routes>
      </main>
      <Footer className={styles.footer} />
      <Modal />
    </div>
  );
};
