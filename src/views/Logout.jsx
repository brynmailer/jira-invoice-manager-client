import React, { useEffect } from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

/* React Router */
import { useHistory } from "react-router-dom";

/* Components */
import { Page } from "../components";

/* Context */
import { useAuth } from "../context";

const LOGOUT = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;

const Logout = () => {
  const [logout] = useMutation(LOGOUT);
  const { destroyCookie } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const doLogout = async () => {
      logout().then(() => {
        destroyCookie();
        history.push("/");
      });
    };

    doLogout();
  }, [logout, destroyCookie, history]);

  return <Page loading />;
};

export default Logout;
