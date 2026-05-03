import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
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
}));

export default function EngineeringPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container direction="column">
      <div className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Link underline="hover" color="inherit" href="/engineering">
            Engineering
          </Link>
          <Typography color="text.primary">Enterprise</Typography>
        </Breadcrumbs>
      </div>
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
        {" "}
        {/* //   =================================== */}
        {/* //   Basic introduction                  */}
        {/* //   =================================== */}
        <Typography variant="subtitle1" className={classes.introductionSection}>
          Freelance engineering seems to be a by-product of a professional
          engineer. The road has been long and there as been a lot of rest
          stops, detours and engagements. Over the years my experience has been
          in software testing, hardware realiability, product delivery manager,
          software develooper, SCRUM master, product client representative,
          associate director, technical consultant, business analysis. Below is
          a briefing of my latest engagements.
        </Typography>
        <Typography variant="body1" className={classes.introductionSection}>
          <div className={classes.topicHeader}>Data Layer Modernization</div>
          <div className={classes.topicHeader}>Enterprise Application SCRUM master</div>
          <div className={classes.topicHeader}>Enterprise Application Delivery Manager</div>
          <div className={classes.topicHeader}>Client Program Manager</div>
        </Typography>
        
      </Grid>
      
      </Grid>
   
  );
}
