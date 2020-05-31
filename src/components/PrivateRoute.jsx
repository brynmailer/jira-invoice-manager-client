import React from "react";

/* React Router */
import { Route, Redirect } from "react-router-dom";

/* Context */
import { useAuth } from "../context";

const PrivateRoute = ({ children, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route {...rest}>
      {authenticated() ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
