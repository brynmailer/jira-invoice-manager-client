import React from "react";

/* React Router */
import { Route, Redirect } from "react-router-dom";

/* Context */
import { useAuth } from "../context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
