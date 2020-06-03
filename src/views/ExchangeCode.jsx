import React, { useEffect } from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

/* Query String */
import queryString from "query-string";

/* React Router */
import { Redirect } from "react-router-dom";

/* Components */
import { Page } from "../components";

const EXCHANGE_AUTH_CODE = gql`
  mutation ExchangeAuthCode($code: String!, $state: String!) {
    exchangeAuthCode(code: $code, state: $state) {
      message
    }
  }
`;

const ExchangeCode = ({ location }) => {
  const [exchangeAuthCode, { data, loading }] = useMutation(EXCHANGE_AUTH_CODE);

  useEffect(() => {
    const { code, state } = queryString.parse(location.search);
    exchangeAuthCode({
      variables: {
        code,
        state,
      },
    });
  }, [location, exchangeAuthCode]);

  if (data && !loading) {
    return <Redirect to="/" />;
  } else {
    return <Page loading />;
  }
};

export default ExchangeCode;
