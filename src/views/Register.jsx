import React from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

/* React Router */
import { Redirect } from "react-router-dom";

/* Formik */
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

/* Components */
import { Page } from "../components";

/* Context */
import { useAuth } from "../context";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(10),
  },
  subTitle: {
    margin: "auto",
    width: "200px",
  },
  registerContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
  registerInput: {
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  registerButton: {
    width: "100%",
  },
  registerError: {
    marginBottom: theme.spacing(2),
  },
  loginLink: {
    textDecoration: "none",
    color: "#0c7489",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  loginMessage: {
    margin: 0,
    paddingTop: theme.spacing(1),
  },
}));

const REGISTER = gql`
  mutation Register($user: UserInput!) {
    register(user: $user) {
      id
      email
      firstName
      lastName
    }
  }
`;

const Register = () => {
  const [register, { loading, error }] = useMutation(REGISTER);
  const { authenticated } = useAuth();
  const classes = useStyles();

  if (!authenticated()) {
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
        <Typography className={classes.subTitle} variant="h5" align="center">
          The Jira integrated invoice manager
        </Typography>
        <Paper className={classes.registerContainer}>
          {loading ? (
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CircularProgress />
            </Grid>
          ) : (
            <Formik
              initialValues={{
                email: "",
                password: "",
                firstName: "",
                lastName: "",
              }}
            >
              <Grid
                component={Form}
                item
                container
                direction="column"
                justify="space-around"
                alignItems="stretch"
              >
                {error && (
                  <MuiAlert
                    className={classes.registerError}
                    elevation={2}
                    variant="filled"
                    severity="error"
                  >
                    {error.message.substring(15)}
                  </MuiAlert>
                )}
                <Grid item>
                  <Field
                    component={TextField}
                    className={classes.registerInput}
                    label="Email"
                    variant="outlined"
                    name="email"
                    type="email"
                    autoComplete="on"
                  />
                </Grid>
                <Grid item>
                  <Field
                    component={TextField}
                    className={classes.registerInput}
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    type="text"
                    autoComplete="on"
                  />
                </Grid>
                <Grid item>
                  <Field
                    component={TextField}
                    className={classes.registerInput}
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    type="text"
                    autoComplete="on"
                  />
                </Grid>
                <Grid item>
                  <Field
                    component={TextField}
                    className={classes.registerInput}
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    autoComplete="on"
                  />
                </Grid>
                <Grid className={classes.registerButtonContainer} item xs={12}>
                  <Button
                    className={classes.registerButton}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item>
                  <p className={classes.loginMessage}>
                    Already have an account?{" "}
                    <a className={classes.loginLink} href="/login">
                      Login
                    </a>
                  </p>
                </Grid>
              </Grid>
            </Formik>
          )}
        </Paper>
      </Page>
    );
  } else if (authenticated()) {
    return <Redirect to="/" />;
  }
};

export default Register;
