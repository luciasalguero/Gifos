import "./Header.css";
import React from "react";
import { Button } from "../button/Button";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Header() {
  const { theme } = React.createContext(ThemeContext);

  return (
    <header className="header flex-row">
      {theme === "light" ? (
        <img className="logo" src="./Logos/logo-mobile-noct.svg" alt="logo" />
      ) : (
        <img className="logo" src="./Logos/logo-desktop.svg" alt="logo" />
      )}
      <Button />
    </header>
  );
}