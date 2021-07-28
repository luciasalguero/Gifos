import "./Dropdown.css";
import React from "react";
import { AppContext } from "../../contexts/AppContext";

export function InputDropdown(props) {
  const { setInput, setIsSearching } = React.useContext(AppContext);

  const handlerUpdateInput = (e) => {
    setInput(props.name);
    setIsSearching(true);
  };

  return (
    <input
      className={
        props.name.length > 0
          ? "autocomplete-items input-search"
          : "no-autocomplete"
      }
      value={props.name}
      onClick={handlerUpdateInput}
      type="text"
    />
  );
}
