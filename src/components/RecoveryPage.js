import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 0,
    alignItems: "left",
  },
  breadcrumbsContainer: {
    marginLeft: "2em",
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "2em",
    },
  },
  recoveryBlock: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1em",
    marginBottom: "2em",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
  },
  recoveryCard: {
    // position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    width: "80%",
    maxWidth: "600px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0em",
      marginRight: "0em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginLeft: "1em",
      marginRight: 0,
      marginBottom: 0,
      width: "90%",
      alignItems: "center",
      justify: "center",
    },
  },
  cardTitle: {
    // fontSize: "",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
  },
  cardParagraph: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  introParagraph: {
    marginLeft: "5%",
    marginRight: "5%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      paddingRight: "1em",
      paddingLeft: "1em",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "2em",
      // marginLeft: "1em",
      marginLeft: "1em",
      marginRight: "1em",
    },
  },
  SobrietyRecoveryDefs: {
    alignItems: "center",
    // fontFamily: "Tahoma",
    marginTop: "5px",
    marginBottom: "5px",
    // fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      marginTop: "1em",
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  topics: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1em",
    marginBottom: "1em",
    alignItems: "center",
  },
  recoveryTerm: {
    fontWeight: 600,
  },
  recoveryDef: {
    fontWeight: "normal",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2em",
    marginBottom: "2em",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },

  findGroupButtom: {
    ...theme.typography.goButton,
    backgroundColor: theme.palette.common.blue,
    color: "white",
    fontSize: "0.7rem",
    height: 35,
    width: 200,
    textAlign: "center",
    padding: 5,
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Typography color="text.primary">Recovery</Typography>
        </Breadcrumbs>
      </Grid>
      <div className={classes.recoveryBlock}>
        {/*-----The Recovery Block-----*/}

        <Card className={classes.recoveryCard}>
          <CardContent>
            <Grid
              container
              direction="column"
              alignContent="center"
              justify="center"
              style={{ textAlign: "center" }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  gutterBottom
                  className={classes.cardTitle}
                >
                  Recovery Advocate
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  className={classes.cardParagraph}
                >
                  I understood myself only after I destroyed myself; and only in
                  the process of healing, have I come to know who I really am.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <div className={classes.introParagraph}>
          <Typography variant="bodyPlain" >
            Life has been a challenge and my childhood was difficult, but I
            never knew. We only know what we know. Our only reference we have
            for reality is what we experience. So I had no idea what was going
            on. Over the decades of my life I struggled with relationships,
            identity and turned to self-medcate to endure. I was a determined,
            self-reliant person through all my challenges. When I finally got
            sick and tired of being sick and tired, I began to seek professional
            help.
            <br />
            <br />I knew self-medication was not the solution to my struggles in
            life, but it seemed like it gave me the ability to continue on. I
            came to understand that my tendency to self-medicate was not the
            problem, but just a symptom of something bigger going on.
          </Typography>
      </div>
      <div className={classes.topics}>
          {/* <Typography
            variant="subtitle1"
            className={classes.SobrietyRecoveryDefs}
          > */}
            <span className={classes.recoveryTerm}>Sobriety: </span>
            {/* {matchesMD ? <br/> : null } */}
            <span className={classes.recoveryDef}>
              the state of not being intoxicated.
            </span>
            <br />
            <span className={classes.recoveryTerm}>Recovery: </span>
            {/* {matchesMD ? <br/> : null } */}
            <span className={classes.recoveryDef}>
              return to a normal state of health, mind or strength.
            </span>
          {/* </Typography> */}
        </div>
        <div className={classes.introParagraph}>
          <Typography variant="bodyPlain" className={classes.introParagraph}>
            Through years of striving and trying, I finally found a program
            called Celebrate Recovery (CR), that helped me get past my
            medicating challeenges and deal with the root of the challenges and
            get some restoration and healing. The truth is, I did not even know
            change was possible, I just figured I had to deal with my hurts,
            habits and hang-ups on my own with a goal of just getting by.
            <br />
            <br />
            Contact me if you want some more information, or click the "Find a
            Group" link below.
          </Typography>
        </div>
      

      <div>
        <div className={classes.buttonWrapper}>
          <Button
            component={Link}
            to="https://locator.crgroups.info/"
            className={classes.findGroupButtom}
            variant="outlined"
            // onClick={() => props.setValue(2)}
          >
            <div className={classes.buttonText}>Find A Group</div>
            <ButtonArrow
              width={15}
              height={15}
              fill={theme.palette.common.white}
            />
          </Button>
        </div>
      </div>
    </Grid>
  );
}
