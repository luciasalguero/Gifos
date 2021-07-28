import { useState } from "react";
import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);

  const handlerInput = (e) => setInput(e.target.value);

  const handlerSearch = () => {
    setIsSearching(true);
  };

  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        handlerInput,
        data,
        setData,
        isLoading,
        setIsLoading,
        isSearching,
        setIsSearching,
        handlerSearch,
        autocomplete,
        setAutocomplete
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
