// Ex 1: Normal Flexbox
// https://react.school/material-ui/grid
import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function getP8ProjectSx(theme) {
  return {
    root: {},
    item: {
      border: "1px solid blue",
    },
    areaLeft: {
      border: "1px solid blue",
      justifyItems: "center",
      textAlign: "center",
      alignItems: "center",
    },
    areaRight: {
      border: "1px solid blue",
      justifyItems: "center",
      textAlign: "center",
      alignItems: "center",
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    flexLeft: {
      border: "1px solid blue",
      backgroundColor: "#f1f1f1",
      marginTop: "3em",
      marginBottom: "3em",
      textAlign: "center",
      lineHeight: "75px",
      fontSize: "30px",
      flex: "50%",
      [theme.breakpoints.down("md")]: {
        marginTop: 0,
        marginBottom: 0,
        flex: "100%",
      },
    },
    flexRight: {
      border: "1px solid blue",
      backgroundColor: "#f1f1f1",
      marginTop: "3em",
      marginBottom: "3em",
      textAlign: "center",
      lineHeight: "75px",
      fontSize: "30px",
      flex: "50%",
      [theme.breakpoints.down("md")]: {
        marginTop: 0,
        marginBottom: 0,
        flex: "100%",
      },
    },
    fContainer: {
      display: "flex",
      flexWrap: "wrap",
      fontSize: "30px",
      textAlign: "center",
    },
    fItemLeft: {
      backgroundColor: "#f1f1f1",
      flex: "50%",
      [theme.breakpoints.down("md")]: {
        flex: "100%",
      },
    },
    fItemRight: {
      backgroundColor: "dodgerblue",
      textAlign: "center",
      flex: "50%",
      [theme.breakpoints.down("md")]: {
        flex: "100%",
      },
    },
  };
}

export default function Example1() {
  const theme = useTheme();
  const sx = useMemo(() => getP8ProjectSx(theme), [theme]);
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <Box sx={sx.root}>
      <Box sx={sx.fContainer}>
        <Box sx={sx.fItemLeft}>
          <Typography variant="body1">
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Box>
        <Box sx={sx.fItemRight}>GRAPHIC1</Box>
      </Box>

      <h3> Ex 1: Normal Flexbox </h3>
      <Box sx={sx.flexContainer}>
        <Box sx={sx.flexLeft}>
          <Typography variant="body1">
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Box>
        <Box sx={sx.flexRight}>GRAPHIC2</Box>
      </Box>
      <h3> Ex 1: Normal Flexbox </h3>
      <Box sx={sx.flexContainer}>
        <Box sx={sx.flexLeft}>
          <Typography variant="body1">
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Box>
        <Box sx={sx.flexRight}>GRAPHIC3</Box>
      </Box>
      <br />
      <Grid container>
        <Grid item sm={12} lg={12}>
          <Typography variant="subtitle1">
            {matchesXS
              ? "XS    " + window.innerWidth
              : matchesSM
              ? "SM    " + window.innerWidth
              : matchesMD
              ? "MD    " + window.innerWidth
              : matchesLG
              ? "LG    " + window.innerWidth
              : matchesXL
              ? "XL    " + window.innerWidth
              : "NADA"}
            <br />
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} lg={6} sx={sx.areaLeft}>
          <Typography variant="body1">
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Grid>
        <Grid item sm={12} lg={6} sx={sx.areaRight}>
          PICTURE
        </Grid>
        <Grid item sm={12} lg={6} sx={sx.areaLeft}>
          <Typography variant="body1">
            And the next thing you know,
            <br />
            you're not who you used to be...
          </Typography>
        </Grid>
        <Grid item sm={12} lg={6} sx={sx.areaRight}>
          PICTURE
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={3} sx={sx.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={sx.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={sx.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={sx.item}>
          <Typography variant="body1">
            Cupidatat est reprehenderit fugiat velit nulla elit incididunt.
            Adipisicing excepteur culpa exercitation nulla. Eu qui dolor veniam
            culpa.
          </Typography>
        </Grid>
      </Grid>
      <br />
    </Box>
  );
}
