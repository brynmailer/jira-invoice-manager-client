import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthWrapper = ({ children }) => {
  const authCookieExists = document.cookie.indexOf('connect.sid') === 0
    ? true
    : false;
  const [ authenticated, setAuthenticated ] = useState(authCookieExists);

  const defaultContext = {
    authenticated,
    setAuthenticated
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
