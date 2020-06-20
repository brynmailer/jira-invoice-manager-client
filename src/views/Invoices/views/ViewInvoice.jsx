import React from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

/* React Router */
import { useParams } from "react-router-dom";

/* Components */
import { Page } from "../../../components";

const GET_INVOICE = gql`
  query GetInvoice($id: String!) {
    invoice(id: $id) {
      number
      issued
      status
      businessName
      billTo
      ratePerHour
      total
      due
      items {
        cloudId
        worklogId
        issueKey
      }
    }
  }
`;

const ViewInvoice = () => {
  const { invoiceId } = useParams();
  const { data, loading, error } = useQuery(GET_INVOICE, {
    variables: { id: invoiceId },
  });

  if (loading || error) {
    return <Page loading />;
  } else {
    return <Page navbar>{data.invoice.status}</Page>;
  }
};

export default ViewInvoice;
