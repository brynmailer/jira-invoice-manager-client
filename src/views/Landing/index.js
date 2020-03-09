import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button
}                   from '@material-ui/core';

/* React Router */
import {
  Link
}                   from 'react-router-dom';

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
    right: 0,
    paddingTop: theme.spacing(10)
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

const Landing = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background} />
      <Container
        className={classes.root}
        maxWidth="sm"
      >
        <Typography
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
              label="Username"
              variant="outlined"
              item
            />
            <TextField
              component={Grid}
              className={classes.loginInput}
              label="Password"
              variant="outlined"
              item
            />
            <Grid
              className={classes.loginButtonContainer}
              item
              xs={12}
            >
              <Button
                className={classes.loginButton}
                component={Link}
                variant="contained"
                color="primary"
                to="/dashboard"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Landing;
