import React from "react";

/* Material Table */
import MaterialTable from "material-table";

/* React Router */
import { useHistory } from "react-router-dom";

/* Components */
import { Page } from "../../../components";

const ViewInvoices = () => {
  const history = useHistory();

  return (
    <Page navbar>
      <MaterialTable
        columns={[
          { title: "Bill To", field: "billTo" },
          { title: "Total", field: "total" },
          { title: "Status", field: "status" },
        ]}
        data={[
          {
            billTo: "Test Company",
            total: "$5000",
            status: "paid",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "overdue",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "issued",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "issued",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "paid",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "overdue",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "overdue",
          },
          {
            billTo: "Test Company",
            total: "$5000",
            status: "paid",
          },
        ]}
        actions={[
          {
            icon: "add",
            tooltip: "Create Invoice",
            isFreeAction: true,
            onClick: () => history.push("/invoices/create"),
          },
        ]}
        options={{
          showTitle: false,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
        }}
      />
    </Page>
  );
};

export default ViewInvoices;
