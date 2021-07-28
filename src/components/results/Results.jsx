import "./Results.css";
import React from "react";
import { Card } from "./Card";
import { AppContext } from "../../contexts/AppContext";

export function Results() {
  const { data } = React.useContext(AppContext);

  return (
    <section className="section center flex-column">
      <h3 className="secundary-title violet-text">
        {data.length > 0
          ? "Resultados de la búsqueda"
          : "Por favor realice una búsqueda"}
      </h3>
      <div className="container-gifs flex-row">
        {data.length === 0 ? (
          <div className="no-results"> No se encontraron resultados </div>
        ) : (
          <Card />
        )}
      </div>
    </section>
  );
}
