import "./Results.css";
import React from "react";
import { AppContext } from "../../contexts/AppContext";

export function Card() {
  const { data } = React.useContext(AppContext);

  return data.map((gif) => {
    return (
      <div className="gif">
        <a href={gif.images.fixed_width.url}>
          <img
            className="gif-container"
            src={gif.images.fixed_width.url}
            key={gif.id}
            alt={gif.title}
          />
        </a>
      </div>
    );
  });
}