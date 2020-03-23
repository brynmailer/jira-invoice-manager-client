import React        from 'react';

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
  Landing,
  Dashboard,
  Settings,
  Invoices,
  Projects
}                   from './views';

/* Components */
import {
  Navbar,
  Background
}                   from './components';

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Redirect from="/logout" to="/" />
          <Route path="/dashboard">
            <Navbar />
            <Background>
              <Dashboard />
            </Background>
          </Route>
          <Route path="/settings">
            <Navbar />
            <Background>
              <Settings />
            </Background>
          </Route>
          <Route path="/invoices">
            <Navbar />
            <Background>
              <Invoices />
            </Background>
          </Route>
          <Route path="/projects">
            <Navbar />
            <Background>
              <Projects />
            </Background>
          </Route>
          <Route path="/">
            <Background>
              <Landing />
            </Background>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
