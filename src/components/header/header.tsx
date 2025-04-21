import React from "react";
import { ControlPanel, Description, Logo } from "./components";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <Description>
        <span>Веб-технологии</span>
        <span>Написание кода</span>
        <span>Разбор ошибок</span>
      </Description>
      <ControlPanel />
    </header>
  );
};
