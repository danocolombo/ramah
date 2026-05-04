import React, { useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function getEnterpriseSx(theme) {
  return {
    breadcrumbsContainer: {
      marginLeft: "2em",
    },
    introductionSection: {
      marginLeft: "5em",
    },
    topicHeader: {
      marginLeft: "2em",
      fontWeight: "bold",
    },
    learnButton: {
      ...theme.typography.learnButton,
      fontSize: "0.7rem",
      height: 35,
      padding: 5,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2em",
      },
    },
    specialText: {
      fontFamily: "Pacifico",
      color: theme.palette.common.orange,
    },
    subtitle: {
      marginBottom: "1em",
    },
    awsIcon: {
      marginLeft: "2em",
      height: "80px",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    icon: {
      marginLeft: "2em",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    certIcon: {
      marginLeft: "2em",
      width: "100px",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    serviceContainer: {
      marginTop: "10em",
      [theme.breakpoints.down("sm")]: {
        padding: 25,
      },
    },
    techTitle: {
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    techIcon: {
      marginRight: "2em",
      marginLeft: "2em",
      marginBottom: "2em",
      width: "100px",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    techDesc: {
      maxWidth: "400px",
    },
    solutionImage: {
      maxWidth: "350px",
      paddingRight: "5em",
    },
  };
}

export default function EnterprisePage() {
  const theme = useTheme();
  const sx = useMemo(() => getEnterpriseSx(theme), [theme]);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction="column">
      <Box sx={sx.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Link underline="hover" color="inherit" href="/engineering">
            Engineering
          </Link>
          <Typography color="text.primary">Enterprise</Typography>
        </Breadcrumbs>
      </Box>
      <Grid item>
        <Typography
          variant="h2"
          gutterBottom
          style={{
            marginLeft: matchesSM ? 0 : "5rem",
            marginTop: matchesSM ? "1em" : "1em",
          }}
          align={matchesSM ? "center" : undefined}
        >
          Enterprise Engineering
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" sx={sx.introductionSection}>
          Freelance engineering seems to be a by-product of a professional
          engineer. The road has been long and there as been a lot of rest stops,
          detours and engagements. Over the years my experience has been in
          software testing, hardware realiability, product delivery manager,
          software develooper, SCRUM master, product client representative,
          associate director, technical consultant, business analysis. Below is a
          briefing of my latest engagements.
        </Typography>
        <Typography variant="body1" sx={sx.introductionSection}>
          <Box component="div" sx={sx.topicHeader}>
            Data Layer Modernization
          </Box>
          <Box component="div" sx={sx.topicHeader}>
            Enterprise Application SCRUM master
          </Box>
          <Box component="div" sx={sx.topicHeader}>
            Enterprise Application Delivery Manager
          </Box>
          <Box component="div" sx={sx.topicHeader}>
            Client Program Manager
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
