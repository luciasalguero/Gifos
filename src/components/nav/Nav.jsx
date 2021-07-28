import "./Nav.css";
import React from "react";
import { ButtonSearch } from "../buttonSearch/buttonSearch";

export function Nav() {
  return (
    <nav className="nav center flex-column">
      <h1 className="main_title violet-text">
        Inspírate, busca, <span className="break"></span> guarda y crea los{" "}
        <span className="break"></span> mejores{" "}
        <span className="turquoise">GIFOS</span>
      </h1>
      <img className="center" src="./Logos/ilustra_header.svg" alt="welcome" />
      <ButtonSearch />
    </nav>
  );
}