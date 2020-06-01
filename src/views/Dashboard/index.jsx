import React from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

/* Components */
import { AtlassianPopup, Overview } from "./components";
import { Page } from "../../components";

const GET_ACCESSIBLE_RESOURCES = gql`
  query GetAccessibleResources {
    getAccessibleResources {
      id
    }
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_ACCESSIBLE_RESOURCES);

  if (loading) {
    return <Page loading />;
  } else {
    return (
      <Page navbar>
        <Overview />
      </Page>
    );
  }
};

export default Dashboard;
