import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Fade,
  Paper,
  Grid,
  Typography,
  Button
}                   from '@material-ui/core';

/* React Router */
import {
  Link
}                   from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    height: '100%'
  },
  grid: {
    height: '80%'
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

const Overview = ({ authorized }) => {
  const classes = useStyles();

  return (
    <Fade in={authorized}>
      <Paper className={classes.root}>
        <Typography
          variant="h3"
          align="center"
        >
          Overview
        </Typography>
        <Grid
          className={classes.grid}
          container
          direction="column"
          justify="space-around"
          alignItems="stretch"
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              component={Grid}
              variant="h4"
              color="primary"
              align="center"
              item
            >
              83 hours 15 mins
            </Typography>
            <Typography
              component={Grid}
              variant="h5"
              align="center"
              item
            >
              worked this month
            </Typography>
            <Grid item>
              <Button
                className={classes.button}
                component={Link}
                color="primary"
                variant="outlined"
                to="/groups"
              >
                View Your Groups
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              component={Grid}
              variant="h4"
              color="primary"
              align="center"
              item
            >
              Invoices:
            </Typography>
            <Typography
              component={Grid}
              variant="h5"
              align="center"
              item
            >
              0 Overdue
            </Typography>
            <Typography
              component={Grid}
              variant="h5"
              align="center"
              item
            >
              0 Pending
            </Typography>
            <Typography
              component={Grid}
              variant="h5"
              align="center"
              item
            >
              23 Fulfilled
            </Typography>
            <Grid item>
              <Button
                className={classes.button}
                component={Link}
                color="primary"
                variant="outlined"
                to="/invoices"
              >
                View Your Invoices
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
}

export default Overview;
