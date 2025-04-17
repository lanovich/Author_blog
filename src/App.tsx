import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import styles from "./App.module.css";
import { Authorization, Registration, Users } from "./pages";

export const Blog = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};
