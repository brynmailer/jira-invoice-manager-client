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
  Route
}                   from 'react-router-dom';

/* Views */
import {
  Landing,
  Dashboard
}                   from './views';

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
