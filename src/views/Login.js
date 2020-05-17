import React        from 'react';

/* GraphQL */
import {
  gql
}                   from 'apollo-boost';
import {
  useMutation
}                   from '@apollo/react-hooks';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  CircularProgress
}                   from '@material-ui/core';

/* React Router */
import {
  Redirect
}                   from 'react-router-dom';

/* Components */
import {
  Page
}                   from '../components';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(10)
  },
  subTitle: {
    margin: 'auto',
    width: '200px'
  },
  loginContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3)
  },
  loginInput: {
    marginBottom: theme.spacing(1)
  },
  loginButton: {
    width: '100%'
  }
}));

const LOGIN = gql`
  mutation Login(
    $email: String!,
    $password: String!
  ) {
    login(
      email: $email,
      password: $password
    ) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Login = () => {
  const [ login, { loading, data, error } ] = useMutation(LOGIN);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const classes = useStyles();

  const handleClick = () => {
    login({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
    });
  }

  if (!data && !loading && !error) {
    return (
      <Page>
        <Typography
          className={classes.title}
          variant="h1"
          align="center"
          color="primary"
        >
          INJOY
        </Typography>
        <Typography
          className={classes.subTitle}
          variant="h5"
          align="center"
        >
          The Jira integrated invoice manager
        </Typography>
        <Paper className={classes.loginContainer}>
          <Grid 
            component="form"
            noValidate 
            autoComplete="off"
            item
            container
            direction="column"
            justify="space-around"
            alignItems="stretch"
          >
            <TextField
              component={Grid}
              className={classes.loginInput}
              label="Email"
              variant="outlined"
              item
              inputProps={{
                ref: emailRef
              }}
            />
            <TextField
              component={Grid}
              className={classes.loginInput}
              label="Password"
              type="password"
              variant="outlined"
              item
              inputProps={{
                ref: passwordRef
              }}
            />
            <Grid
              className={classes.loginButtonContainer}
              item
              xs={12}
            >
              <Button
                onClick={handleClick}
                className={classes.loginButton}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Page>
    );
  } else if (loading) {
    return (
      <Page>
        <Typography
          className={classes.title}
          variant="h1"
          align="center"
          color="primary"
        >
          INJOY
        </Typography>
        <Typography
          className={classes.subTitle}
          variant="h5"
          align="center"
        >
          The Jira integrated invoice manager
        </Typography>
        <Paper className={classes.loginContainer}>
          <Grid 
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <CircularProgress />
          </Grid>
        </Paper>
      </Page>
    );
  } else if (data && !error) {
    return <Redirect to="/" />
  }
}

export default Login;
