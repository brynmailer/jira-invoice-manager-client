import React from "react";

/* GraphQL */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

/* Material UI */
import "typeface-roboto";
import { CssBaseline } from "@material-ui/core";

/* React Router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Views */
import {
  Login,
  Register,
  Logout,
  Dashboard,
  Settings,
  Invoices,
  Projects,
  ExchangeCode,
} from "./views";

/* Components */
import { PrivateRoute, Theme } from "./components";

/* Utils */
import { AuthWrapper, SettingsWrapper } from "./utils";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  credentials: "include",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <SettingsWrapper>
        <Theme>
          <AuthWrapper>
            <Router>
              <Switch>
                <PrivateRoute component={Dashboard} exact path="/" />
                <PrivateRoute component={Settings} path="/settings" />
                <PrivateRoute component={Invoices} path="/invoices" />
                <PrivateRoute component={Logout} path="/logout" />
                <PrivateRoute component={ExchangeCode} path="/exchange-code" />
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
              </Switch>
            </Router>
          </AuthWrapper>
        </Theme>
      </SettingsWrapper>
    </ApolloProvider>
  );
};

export default App;
