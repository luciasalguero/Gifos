import "./Dropdown.css";
import React from "react";
import { InputDropdown } from "./InputDropdown";
import { AppContext } from "../../contexts/AppContext";

export function Dropdown() {
  const { autocomplete } = React.useContext(AppContext);

  return (
    <div className="autocomplete">
      {autocomplete.length > 0
        ? autocomplete.map((objeto, index) => {
            return <InputDropdown key={index} name={objeto.name} />;
          })
        : null}
    </div>
  );
}
