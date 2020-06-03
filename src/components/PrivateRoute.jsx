import React from "react";

/* React Router */
import { Route, Redirect } from "react-router-dom";

/* Utils */
import { useAuth } from "../utils";

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
