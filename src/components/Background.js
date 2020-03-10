import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Container
}                   from '@material-ui/core';

/* React Router */
import {
  useLocation
}                   from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100vw',
    backgroundColor: '#d7d9ce',
    backgroundImage: '-webkit-linear-gradient(30deg, #119da4 50vh, #d7d9ce 50vw)',
    opacity: 0.2
  },
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: `calc(100% - ${theme.spacing(4)}px - 56px)`,
    overflowY: 'scroll'
  }
}));

const Background = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <div
        className={classes.background}
        style={{
          height: location.pathname === '/' ? '100%' : 'calc(100% - 56px)'
        }}
      />
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
