import React        from 'react';

/* GraphQL */
import ApolloClient from 'apollo-boost';
import {
  ApolloProvider
}                   from '@apollo/react-hooks';

/* Material UI */
import 'typeface-roboto';
import {
  createMuiTheme,
  ThemeProvider
}                   from '@material-ui/core/styles';
import {
  CssBaseline
}                   from '@material-ui/core';

/* React Router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
}                   from 'react-router-dom';

/* Views */
import {
  Login,
  Dashboard,
  Settings,
  Invoices,
  Projects
}                   from './views';

/* Components */
import {
  PrivateRoute
}                   from './components';

/* Context */
import {
  AuthWrapper
}                   from './context';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#119da4',
      main: '#0c7489',
      dark: '#13505b'
    },
    secondary: {
      main: '#d7d9ce'
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <AuthWrapper>
          <Router>
            <Switch>
              <Redirect from="/logout" to="/login" />
              <PrivateRoute exact path="/">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                <Settings />
              </PrivateRoute>
              <PrivateRoute path="/invoices">
                <Invoices />
              </PrivateRoute>
              <PrivateRoute path="/projects">
                <Projects />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </AuthWrapper>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
