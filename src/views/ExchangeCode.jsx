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
  const [exchangeAuthCode, { loading, error }] = useMutation(
    EXCHANGE_AUTH_CODE
  );

  useEffect(() => {
    const queryObject = queryString.parse(location.search);
    console.log(queryObject);

    exchangeAuthCode({
      variables: {
        code: queryObject.code,
        state: queryObject.state,
      },
    });
  }, []);

  if (loading) {
    return <Page loading />;
  } else {
    return <Redirect to="/" />;
  }
};

export default ExchangeCode;
