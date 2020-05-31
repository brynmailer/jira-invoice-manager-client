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

/* Yup */
import * as Yup from "yup";

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
  loginContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
  loginInput: {
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  loginButton: {
    width: "100%",
  },
  loginError: {
    marginBottom: theme.spacing(2),
  },
}));

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string().trim().required("Required"),
});

const Login = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const { authenticated } = useAuth();
  const classes = useStyles();

  const handleSubmit = (values, { setSubmitting }) => {
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
      .then(() => {
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
      });
  };

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
        <Paper className={classes.loginContainer}>
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
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
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
                    className={classes.loginError}
                    elevation={2}
                    variant="filled"
                    severity="error"
                  >
                    {error:}
                  </MuiAlert>
                )}
                <Grid item>
                  <Field
                    component={TextField}
                    className={classes.loginInput}
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
                    className={classes.loginInput}
                    label="Password"
                    variant="outlined"
                    name="password"
                    type="password"
                    autoComplete="on"
                  />
                </Grid>
                <Grid className={classes.loginButtonContainer} item xs={12}>
                  <Button
                    className={classes.loginButton}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
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

export default Login;
