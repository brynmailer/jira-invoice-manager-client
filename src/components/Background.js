import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Container
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
  }
}));

const Background = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background} />
      <Container
        className={classes.root}
        maxWidth="sm"
      >
        {children}
      </Container>
    </>
  );
}

export default Background;
