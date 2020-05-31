import React, { useEffect } from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, CircularProgress } from "@material-ui/core";

/* React Router */
import { useHistory } from "react-router-dom";

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
  logoutContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
}));

const LOGOUT = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;

const Logout = () => {
  const [logout] = useMutation(LOGOUT);
  const { destroyCookie } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    const doLogout = async () => {
      logout().then(() => {
        destroyCookie();
        history.push("/");
      });
    };

    doLogout();
  }, []);

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
      <Paper className={classes.logoutContainer}>
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
};

export default Logout;
