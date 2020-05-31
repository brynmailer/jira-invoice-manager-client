import React from "react";

/* Material Table */
import MaterialTable from "material-table";

/* React Router */

import { useHistory } from "react-router-dom";

const ViewInvoices = () => {
  const history = useHistory();

  return (
    <MaterialTable
      columns={[
        { title: "Bill To", field: "billTo" },
        { title: "Number", field: "invoiceNo" },
        { title: "Total", field: "total" },
        { title: "Status", field: "status" },
      ]}
      data={[
        {
          billTo: "Test Company",
          invoiceNo: "101",
          total: "$5000",
          status: "paid",
        },
        {
          billTo: "Test Company",
          invoiceNo: "102",
          total: "$5000",
          status: "overdue",
        },
        {
          billTo: "Test Company",
          invoiceNo: "103",
          total: "$5000",
          status: "issued",
        },
        {
          billTo: "Test Company",
          invoiceNo: "104",
          total: "$5000",
          status: "issued",
        },
        {
          billTo: "Test Company",
          invoiceNo: "105",
          total: "$5000",
          status: "paid",
        },
        {
          billTo: "Test Company",
          invoiceNo: "106",
          total: "$5000",
          status: "overdue",
        },
        {
          billTo: "Test Company",
          invoiceNo: "107",
          total: "$5000",
          status: "overdue",
        },
        {
          billTo: "Test Company",
          invoiceNo: "108",
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
  );
};

export default ViewInvoices;
