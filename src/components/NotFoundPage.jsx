import React, { useEffect, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Lottie from "react-lottie";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import NotFoundAnimation from "../animations/404pageNotFound/data.json";

function getNotFoundSx(theme) {
  return {
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
  };
}

export default function NotFoundPage(props) {
  const theme = useTheme();
  const sx = useMemo(() => getNotFoundSx(theme), [theme]);
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
    >
      <Grid item>
        <Grid item xs={8}>
          <Lottie options={defaultOptions} height="200px" width="300px" />
          <Typography
            variant={matchesMD ? "h4" : matchesXL ? "h2" : "h1"}
            sx={sx.errorMessage}
          >
            FILE NOT FOUND
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
