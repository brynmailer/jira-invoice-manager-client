import React, { useEffect, useState } from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

/* Components */
import { AtlassianPopup, Overview } from "./components";
import { Page } from "../../components";

const GET_USER_REFRESH_TOKEN = gql`
  query GetUserRefreshToken {
    currentUser {
      refreshToken
    }
  }
`;

const Dashboard = () => {
  const [authorized, setAuthorized] = useState(false);
  const { data, loading, error } = useQuery(GET_USER_REFRESH_TOKEN, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    let mounted = true;
    if (!error && !loading && mounted)
      setAuthorized(data.currentUser.refreshToken ? true : false);

    return () => (mounted = false);
  }, [data, loading, error]);

  if (loading) {
    return <Page loading />;
  } else {
    return (
      <Page navbar>
        <AtlassianPopup authorized={authorized} />
        <Overview authorized={authorized} />
      </Page>
    );
  }
};

export default Dashboard;
