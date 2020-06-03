import React from "react";

/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Switch,
  FormControlLabel,
} from "@material-ui/core";

/* Utils */
import { useSettings } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const ThemeSelect = () => {
  const { darkMode, setDarkMode } = useSettings();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Theme"
        titleTypographyProps={{
          variant: "h6",
        }}
      />
      <CardContent>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(event) => setDarkMode(event.target.checked)}
              name="darkMode"
              color="primary"
            />
          }
          label="Dark Mode"
        />
      </CardContent>
    </Card>
  );
};

export default ThemeSelect;
