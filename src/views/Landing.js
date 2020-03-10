import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
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

const Landing = () => {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
}

export default Landing;
