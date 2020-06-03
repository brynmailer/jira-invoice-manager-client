import React, { createContext, useContext } from "react";

/* Utils */
import { useLocalStorage } from "./useLocalStorage";

export const SettingsContext = createContext();

export const SettingsWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [currencyFormat, setCurrencyFormat] = useLocalStorage(
    "currencyFormat",
    {
      code: "AUD",
      precision: 2,
      thousand: ",",
      decimal: ".",
    }
  );

  const defaultContext = {
    darkMode,
    setDarkMode,
    currencyFormat,
    setCurrencyFormat,
  };

  return (
    <SettingsContext.Provider value={defaultContext}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
