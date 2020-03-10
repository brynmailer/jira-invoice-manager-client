import React          from 'react';

/* Material UI */
import {
  makeStyles
}                     from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText
}                     from '@material-ui/core';
import MenuIcon       from '@material-ui/icons/Menu';

/* React Router */
import {
  Link,
  useLocation
}                     from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  spacer: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [ menuState, setMenuState ] = React.useState(false);
  let location = useLocation();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleMenu = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setMenuState(open);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="secondary"
            size="small"
            onClick={toggleMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.spacer} />
          <Typography variant="h6">Greetings, User!</Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={menuState}
        onClose={toggleMenu(false)}
        onOpen={toggleMenu(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div 
          className={classes.list}
          role="presentation"
          onClick={toggleMenu(false)}
          onKeyDown={toggleMenu(false)}
        >
          <List>
            {['Dashboard', 'Groups', 'Invoices'].map((text, index) => (
              <ListItem
                component={Link}
                button
                key={text}
                to={`/${text.toLowerCase()}`}
                selected={location.pathname === `/${text.toLowerCase()}`}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <Divider />
            {['Settings', 'Logout'].map((text, index) => (
              <ListItem
                component={Link}
                button
                key={text}
                to={`/${text.toLowerCase()}`}
                selected={location.pathname === `/${text.toLowerCase()}`}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    color: text === 'Logout' ? 'error' : ''
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default Navbar;
