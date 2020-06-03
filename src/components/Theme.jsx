import React from "react";

/* Material UI */
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

/* Utils */
import { useSettings } from "../utils";

const Theme = ({ children }) => {
  const { darkMode } = useSettings();
  const theme = createMuiTheme({
    palette: {
      ...(darkMode && { type: "dark" }),
      primary: {
        main: cyan[800],
      },
      secondary: {
        main: cyan[800],
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
