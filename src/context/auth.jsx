import React, { createContext, useContext } from "react";

/* JS Cookie */
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthWrapper = ({ children }) => {
  const defaultContext = {
    authenticated: () => (Cookies.get("connect.sid") ? true : false),
    destroyCookie: () => {
      Cookies.remove("connect.sid");
    },
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
