import "./ButtonSearch.css";
import { useEffect } from "react";
import React from "react";
import { AppContext } from "../../contexts/AppContext";
import { Dropdown } from "../dropdown/Dropdown";

export function ButtonSearch() {
  const {
    input,
    handlerInput,
    autocomplete,
    setAutocomplete,
    handlerSearch
  } = React.useContext(AppContext);

  useEffect(() => {
    const cleanInput = () => setAutocomplete([]);
    document.getElementById("searchbox").addEventListener("search", cleanInput);
  }, [setAutocomplete]);

  const enterSearch = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handlerSearch();
    }
  };

  return (
    <div
      className={
        autocomplete.length > 0
          ? "search-open flex-row"
          : "search-close flex-row"
      }
    >
      <div className="container-searched">
        <input
          id="searchbox"
          autoComplete="off"
          className="input-search first-input"
          type="search"
          onKeyDown={enterSearch}
          placeholder="Busca GIFOS y más"
          value={input}
          onChange={handlerInput}
        ></input>
        <Dropdown />
      </div>
      <button
        className={
          autocomplete.length > 0 ? "btn-search btn-open" : "btn-search"
        }
        onClick={handlerSearch}
      >
        <img
          className="center icon-search"
          src="./Logos/icon-search-mod-noc.svg"
          alt="icono"
        />
      </button>
    </div>
  );
}
