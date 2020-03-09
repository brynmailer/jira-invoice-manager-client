import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button
}                   from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  background: {
    position: 'fixed',
    left: 0,
    right: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#d7d9ce',
    backgroundImage: '-webkit-linear-gradient(30deg, #119da4 50vh, #d7d9ce 50vw)',
    opacity: 0.2
  },
  root: {
    position: 'fixed',
    left: 0,
    right: 0
  },
  setupPanel: {
    padding: theme.spacing(3),
    marginTop: '60%'
  },
  setupButton: {
    marginTop: theme.spacing(3)
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background} />
      <Container
        className={classes.root}
        maxWidth="sm"
      >
        <Paper
          className={classes.setupPanel}
          component={Grid}
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
        >
          <Typography
            component={Grid}
            variant="h5"
            align="center"
            item
          >
            Let's get you set up!
          </Typography>
          <Button
            className={classes.setupButton}
            component={Grid}
            color="primary"
            variant="contained"
            item
          >
            Log in with Atlassian
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default Landing;
