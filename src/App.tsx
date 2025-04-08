import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Footer, Header } from "./components";

export const Blog = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.content}>
        <h2 className={styles.heading2}>Контент страницы</h2>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<div>Авторизация</div>} />
          <Route path="/register" element={<div>Регистрация</div>} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};
