import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Paper,
  Grid,
  Typography,
  Button
}                   from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing(3),
    marginRight: '-50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    '&:focus': {
      outline: '0px solid transparent'
    }
  },
  button: {
    marginTop: theme.spacing(3)
  }
}));

const AtlassianPopup = ({ authorized, handleAuthorize }) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.root}
      open={!authorized}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
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
          <Typography
            component={Grid}
            variant="h5"
            align="center"
            item
          >
            Let's get you set up!
          </Typography>
          <Button
            className={classes.button}
            component={Grid}
            color="primary"
            variant="contained"
            item
            onClick={() => handleAuthorize(true)}
          >
            Log in with Atlassian
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
}

export default AtlassianPopup;
