import React                from 'react';

/* React Router */
import {
  Switch,
  Route
}                           from 'react-router-dom';

/* Views */
import {
  ViewInvoices,
  CreateInvoice
}                           from './views';

const Invoices = () => {

  return (
    <Switch>
      <Route path="/invoices/create">
        <CreateInvoice />
      </Route>
      <Route path="/invoices">
        <ViewInvoices />
      </Route>
    </Switch>
  );
}

export default Invoices;
