import { Routes, Route } from "react-router-dom";
import "./App.css";

const Header = () => <div>Шапка</div>;
const Footer = () => <div>Шапка</div>;

export const Blog = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <h2 className="heading2">Контент страницы</h2>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>}/>
          <Route path="/login" element={<div>Авторизация</div>}/>
          <Route path="/register" element={<div>Регистрация</div>}/>
          <Route path="/users" element={<div>Пользователи</div>}/>
          <Route path="/post" element={<div>Новая статья</div>}/>
          <Route path="/post/:postId" element={<div>Статья</div>}/>
          <Route path="*" element={<div>Ошибка</div>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
