import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import sunIcon from "./images/icon-sun.svg";
import moonIconLight from "./images/icon-moon-light.svg";

const DictContext = createContext();

function DictProvider({ children }) {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("hi");
  const dictionaryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [wordMsgDisplay, setWordMsgDisplay] = useState(false);
  const [font, setFont] = useState("serif");

  const theme = {
    dark: {
      text: "dark",
      svg: sunIcon,
    },
    light: {
      text: "light",
      svg: moonIconLight,
    },
  };

  const [switchTheme, setSwitchTheme] = useState(theme.dark);
  document.body.classList.add(switchTheme.text, font);

  useEffect(() => {
    // object to display the error message
    const wrongWordMsg = {
      title: "No Definitions Found",
      message:
        "Sorry pal, we couldn't find definitions for the word you were looking for.",
      resolution:
        "You can try the search again at later time or head to the web instead.",
    };

    // function to fetch data
    async function fetchData(wordSearch) {
      setLoading(true);
      try {
        const response = await axios.get(`${dictionaryUrl}${wordSearch}`);
        setWordMsgDisplay(false);
        setWordData(response.data[0]);
      } catch (error) {
        setWordMsgDisplay(true);
        setWordData(wrongWordMsg);
      }
      setLoading(false);
    }
    fetchData(search);
  }, [search]);

  return (
    <DictContext.Provider
      value={{
        theme,
        switchTheme,
        setSwitchTheme,
        font,
        setFont,
        wordData,
        loading,
        setSearch,
        wordMsgDisplay,
      }}
    >
      {children}
    </DictContext.Provider>
  );
}

export { DictProvider, DictContext };
