import React from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

/* Material UI */
import { TableRow } from "@material-ui/core";

/* Material Table */
import MaterialTable from "material-table";

/* React Router */
import { useHistory } from "react-router-dom";

/* Components */
import { Page } from "../../../components";

const GET_INVOICES = gql`
  query GetInvoices {
    currentUser {
      invoices {
        id
        billTo
        number
        status
      }
    }
  }
`;

const ViewInvoices = () => {
  const { data, loading, error } = useQuery(GET_INVOICES);
  const history = useHistory();
  const priorities = {
    overdue: 1,
    pending: 2,
    paid: 3,
  };

  if (loading || error) {
    return <Page loading />;
  } else {
    return (
      <Page navbar>
        <MaterialTable
          columns={[
            { title: "Bill To", field: "billTo" },
            { title: "Number", field: "number" },
            {
              title: "Status",
              field: "status",
              customSort: (a, b) => priorities[a.status] - priorities[b.status],
              defaultSort: "asc",
            },
          ]}
          data={data.currentUser.invoices}
          localization={{
            header: {
              actions: "",
            },
          }}
          actions={[
            {
              icon: "add",
              tooltip: "Create invoice",
              isFreeAction: true,
              onClick: () => history.push("/invoices/create"),
            },
            {
              icon: "keyboard_arrow_right",
              tooltip: "View invoice",
              iconProps: {
                fontSize: "small",
              },
              onClick: (event, rowData) =>
                history.push(`/invoices/${rowData.id}`),
            },
          ]}
          options={{
            showTitle: false,
            search: false,
            sorting: true,
            pageSize: 10,
            pageSizeOptions: [10],
            actionsColumnIndex: -1,
          }}
        />
      </Page>
    );
  }
};

export default ViewInvoices;
