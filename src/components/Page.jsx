import React from "react";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

/* Components */
import { Navbar } from "../components";

const useStyles = makeStyles((theme) => ({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100vw",
    height: `calc(100% - 56px)`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: `calc(100% - 48px)`,
    },
    [theme.breakpoints.up("sm")]: {
      height: `calc(100% - 64px)`,
    },
    backgroundColor: "#d7d9ce",
    backgroundImage:
      "-webkit-linear-gradient(30deg, #119da4 50vh, #d7d9ce 50vw)",
    opacity: 0.2,
  },
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: 0,
    height: `calc(100% - 56px)`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: `calc(100% - 48px)`,
    },
    [theme.breakpoints.up("sm")]: {
      height: `calc(100% - 64px)`,
    },
    overflowY: "scroll",
  },
}));

const Page = ({ children, navbar = false }) => {
  const classes = useStyles();

  return (
    <>
      {navbar ? <Navbar /> : null}
      <div
        className={classes.background}
        style={!navbar ? { height: "100%" } : null}
      />
      <Container
        className={classes.root}
        style={!navbar ? { height: "100%" } : null}
        maxWidth="sm"
      >
        {children}
      </Container>
    </>
  );
};

export default Page;
