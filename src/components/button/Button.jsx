import "./Button.css";
import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Button() {
  const { theme, handlerTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <button
        className="change-btn violet-text"
        value={theme}
        onClick={handlerTheme}
      >
        MODO {theme === "light" ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
}