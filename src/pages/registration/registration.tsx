import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "@/bff";
import { Button, H2, Input } from "@/components/shared";
import { Link, Navigate } from "react-router-dom";
import { setUser } from "@/actions";
import { selectUserRole } from "@/selectors";
import { ROLE_IDS } from "@/constants";
import styles from "./registration.module.css";
import { useResetForm } from "@/hooks";

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Логин обязателен")
    .matches(/^\w+$/, "Неверно заполнен логин. Допускаются только буквы и цифры")
    .min(3, "Неверно заполнен логин. Минимум 3 символа")
    .max(15, "Неверно заполнен логин. Максимум 15 символов"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .matches(/^[\w#%]+$/, "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %")
    .min(6, "Неверно заполнен пароль. Минимум 6 символов")
    .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
  passcheck: yup
    .string()
    .required("Заполните повтор пароля")
    .oneOf([yup.ref("password")], "Повтор пароля не совпадает"),
});

type FormData = yup.InferType<typeof regFormSchema>;

export const Registration: React.FC = () => {
  const [serverError, setServerError] = useState<string | null>("");
  const roleId = useSelector(selectUserRole);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(regFormSchema),
  });

  const onSubmit = async ({ login, password }: FormData) => {
    try {
      const { error, res } = await server.register(login, password);
      if (error) {
        setServerError(`Ошибка: ${error}`);
        return;
      }

      dispatch(setUser(res));
      sessionStorage.setItem("userData", JSON.stringify(res));
    } catch (err) {
      setServerError("Произошла непредвиденная ошибка: ");
      console.log(err);
    }
  };

  const errorMessage =
    errors.login?.message ||
    errors.password?.message ||
    errors.passcheck?.message ||
    serverError;

  useResetForm(reset);

  if (roleId !== ROLE_IDS.GUEST) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={styles.container}>
      <H2>Регистрация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          autoComplete="username"
          {...register("login", { onChange: () => setServerError(null) })}
          error={!!errors.login}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          autoComplete="current-password"
          {...register("password", { onChange: () => setServerError(null) })}
          error={!!errors.password}
        />
        <Input
          type="password"
          placeholder="Проверка пароля..."
          autoComplete="current-password"
          {...register("passcheck", { onChange: () => setServerError(null) })}
          error={!!errors.password}
        />
        <Button type="submit" disabled={isSubmitting || !!errorMessage}>
          {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <Link to={"/login"} className={styles.link}>
          Войти
        </Link>
      </form>
    </div>
  );
};
