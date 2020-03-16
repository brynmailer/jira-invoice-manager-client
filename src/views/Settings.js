import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid
}                   from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    height: '100%'
  }
}));

const Settings = ({ authorized }) => {
  const classes = useStyles();

  return (
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
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Settings;
