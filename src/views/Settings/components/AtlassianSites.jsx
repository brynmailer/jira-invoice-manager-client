import React from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

/* React Router */
import { Redirect } from "react-router-dom";

/* Material Table */
import MaterialTable from "material-table";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import { Card, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loadingCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
  },
}));

const GET_ACCESSIBLE_SITES = gql`
  query GetAccessibleSites {
    accessibleResources {
      name
    }
  }
`;

const GET_AUTH_URL = gql`
  query GetAuthUrl {
    authUrl
  }
`;

const AtlassianSites = () => {
  const {
    data: accessibleResourcesData,
    loading: accessibleResourcesLoading,
    error: accessibleResourcesError,
  } = useQuery(GET_ACCESSIBLE_SITES, {
    fetchPolicy: "no-cache",
  });
  const [
    getAuthUrl,
    { data: authUrlData, loading: authUrlLoading, error: authUrlError },
  ] = useLazyQuery(GET_AUTH_URL);
  const classes = useStyles();

  if (
    accessibleResourcesLoading ||
    accessibleResourcesError ||
    authUrlLoading ||
    authUrlError
  ) {
    return (
      <Card className={classes.loadingCard}>
        <CircularProgress />
      </Card>
    );
  } else if (authUrlData) {
    window.location.href = authUrlData.authUrl;
    return (
      <Card className={classes.loadingCard}>
        <CircularProgress />
      </Card>
    );
  } else {
    return (
      <MaterialTable
        title="Managed Atlassian Sites"
        components={{
          Container: Card,
        }}
        options={{
          search: false,
          pageSize: 3,
          pageSizeOptions: [3],
          actionsColumnIndex: -1,
        }}
        columns={[{ name: "Domain", field: "domain" }]}
        data={accessibleResourcesData.accessibleResources.map((resource) => ({
          domain: resource.name + ".atlassian.net",
        }))}
        actions={[
          {
            icon: "add",
            tooltip: "Add Site",
            isFreeAction: true,
            onClick: getAuthUrl,
          },
        ]}
      />
    );
  }
};

export default AtlassianSites;
