import { createTheme } from "@mui/material/styles";

//common colors used throughout
const arcBlue = "#0d72bb";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const fortsonRed = "#DC143C";
const fortsonBlue = "#0000FF";
const fortsonBlack = "#000000";
const fortsonGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: `${fortsonBlue}`,
      orange: `${arcOrange}`,
      red: `${fortsonRed}`,
      black: `${fortsonBlack}`,
      grey: `${fortsonGrey}`,
      white: "#ffffff",
    },
    primary: {
      main: `${fortsonBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: fortsonBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    bodyPlain: {
      fontSize: "1rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    goButton: {
      borderColor: "black",
      borderWidth: 2,
      textTransform: "none",
      color: "white",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 360,
      lg: 750,
      xl: 1200,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: arcBlue,
          fontSize: "1rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: arcGrey,
          fontWeight: 300,
        },
        underline: {
          "&:before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `2px solid ${arcBlue}`,
          },
        },
      },
    },
  },
});
