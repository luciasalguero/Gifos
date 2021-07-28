import "./App.css";
import React from "react";
import { useEffect } from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Results } from "./components/results/Results";
import { Loader } from "./components/loader/Loader";
import { AppContext } from "./contexts/AppContext";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = React.useContext(ThemeContext);
  const {
    input,
    setInput,
    setData,
    isLoading,
    setIsLoading,
    isSearching,
    setIsSearching,
    setAutocomplete
  } = React.useContext(AppContext);

  
  const searchPath = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}&limit=12`;
  const autocompletePath = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${input}&limit=4`;

  useEffect(() => {
    if (isSearching) {
      setIsLoading(true);
      fetch(searchPath)
        .then(function (response) {
          return response.json();
        })

        .then(function (data) {
          setData(data.data);
          setIsLoading(false);
          setIsSearching(false);
          setInput("");
          setAutocomplete([]);
        })

        .catch(function (error) {
          console.log(error.message);
        });
    }
  }, [isSearching]);

  useEffect(() => {
    if (input) {
      fetch(autocompletePath)
        .then((response) => response.json())
        .then((data) => {
          setAutocomplete(data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [input, setAutocomplete]);

  return (
    <div className={`App ${theme} center`}>
      <div className="principal-container">
        <Header />
        <Nav />
        {isLoading ? <Loader /> : <Results />}
      </div>
    </div>
  );
}

