import React, { useState, useEffect } from "react";

/* GraphQL */
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Paper,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(3),
    marginRight: "-50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    "&:focus": {
      outline: "0px solid transparent",
    },
  },
  button: {
    marginTop: theme.spacing(3),
  },
  loadingContainer: {
    height: "92px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const GET_AUTH_URL = gql`
  query GetAuthUrl {
    authUrl
  }
`;

const AtlassianPopup = ({ authorized }) => {
  const [getAuthUrl, { data, loading, error }] = useLazyQuery(GET_AUTH_URL);
  const [queryTriggered, setQueryTriggered] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (!loading && !error && data) window.location.href = data.authUrl;
  }, [data, loading, error]);

  return (
    <Modal
      className={classes.root}
      open={!authorized}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={!authorized}>
        <Paper
          className={classes.paper}
          component={Grid}
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
        >
          {queryTriggered ? (
            <div className={classes.loadingContainer}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <Typography component={Grid} variant="h5" align="center" item>
                Let's get you set up!
              </Typography>
              <Button
                className={classes.button}
                component={Grid}
                color="primary"
                variant="contained"
                item
                onClick={() => {
                  setQueryTriggered(true);
                  getAuthUrl();
                }}
              >
                LINK A JIRA SITE
              </Button>
            </>
          )}
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AtlassianPopup;
