import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NotFoundAnimation from "../animations/404pageNotFound/data.json";

const useStyles = makeStyles((theme) => ({
  breadcrumbsContainer: {
    marginLeft: "2em",
  },
  errorMessage: {
    textAlign: "center",
    marginBottom: "1em",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xl")]: {
      width: "500px",
    },
    
  },
  lottieProgrammer: {
    // textAlign: "center",
    // height: "50%",
    // width: "50%",
    // align: "center",
    // alignItems: "center",
    // alignSelf: "center",
    // justifyContent: "center",
    // textAlign: "center",
  },
}));

export default function NotFoundPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="top"
      // style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Grid item xs={8}>
          <Lottie options={defaultOptions} height="200px" width="300px" className={classes.lottieProgrammer}/>
          <Typography variant={matchesMD ? "h4" : matchesXL ? "h2" : "h1"} className={classes.errorMessage}>FILE NOT FOUND</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
