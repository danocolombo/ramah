import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      marginTop: "-2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  breadcrumbsContainer: {
    marginLeft: "2em",
  },
  sectionTitleOne: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "1em",
    fontFamily: "Raleway",
    fontSize: "1.75rem",
    color: theme.palette.common.blue,
    fontWeight: 700,
  },
  flexContainer: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  paragraphOne: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "1.2em",
    marginRight: "1em",
    textAlign: "left",
    lineHeight: "75px",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginBottom: 0,
      width: "80%",
    },
  },
  bulletContainerOne: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
  },
  sectionTitleTwo: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "3em",
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    color: theme.palette.common.blue,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5em",
    },
  },
  flexContainerTwo: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "5em",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      marginLeft: "3em",
    },
  },
  paragraphTwo: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: "1em",
    textAlign: "left",
    lineHeight: "75px",
    fontSize: "25px",
  },
  customerNeed: {
    marginBottom: "1em",
    fontWeight: "bold",
    paddingLeft: "25px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "10px",
    },
  },
  bulletContainerTwo: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "75px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      paddingRight: "10px",
      // width: "80%",
    },
  },
  sectionTitleThree: {
    marginTop: "1em",
    marginRight: 0,
    marginBottom: 0,
    marginLeft: "5em",
    fontFamily: "Raleway",
    fontSize: "1.1rem",
    color: theme.palette.common.blue,
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      marginLeft: "3em",
    },
  },
}));

export default function EngineeringPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Grid item className={classes.breadcrumbsContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Main
          </Link>
          <Link underline="hover" color="inherit" href="/engineering">
            Engineering
          </Link>
          <Typography color="text.primary">Custom Software</Typography>
        </Breadcrumbs>
      </Grid>
      {/* //   =================================== */}
      {/* //   Paragraph 1                         */}
      {/* //   =================================== */}
      <Typography className={classes.sectionTitleOne}>
        Custom Software {matchesMD ? null : "Development"}
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.paragraphOne}>
          <Typography
          // variant="subtitle1"
          // className={classes.introductionSection}
          >
            The reality is that software engineering is not just about a clean
            simple design, code, test and deliver on time life. The challenges
            of engineering are taking exising systems and modifying and adapting
            them as needed. Modernizing and improving on systems that are
            already in place.
            <br />
            You might be familiar with the discussions...
          </Typography>
        </div>
      </div>
      <div className={classes.bulletContainerOne}>
        <ul>
          <li>We need to reduce our costs</li>
          <li>One of our components is no longer supported</li>
          <li>We want to add this new feature</li>
          <li>Performance and response times are not acceptable</li>
        </ul>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.paragraphOne}>
          <Typography
            variant="subtitle1"
            // className={classes.introductionSection}
          >
            And the list goes on. All of these challenges are not your typical
            assignment for someone just getting started in software engineering.
            These challenges take experience, and insights. Through the years I
            have been able to take on these type of challenges and finish with
            satisfaction.
          </Typography>
        </div>
      </div>
      {/* //   =================================== */}
      {/* //   Product Evolution                   */}
      {/* //   =================================== */}
      <Typography className={classes.sectionTitleOne}>
        Product Evolution
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.paragraphOne}>
          <Typography>
            Over the years I have been task with working with one software
            solution for managing a client's meetings. It was custom software,
            originally written in PHP with a MySQL database backend.
          </Typography>
        </div>
      </div>
      {/* //   =================================== */}
      {/* //   Phase I                             */}
      {/* //   =================================== */}
      <Typography className={classes.sectionTitleTwo}>Phase I</Typography>
      <div className={classes.flexContainerTwo}>
        <div className={classes.paragraphTwo}>
          <Typography className={classes.customerNeed}>
            The first desire was to update the user workflows, UI and get off
            the hosted webserver.
          </Typography>
          <Typography>
            This took on a full SDLC approach as user requirements and scope
            definition was defined. The entire PHP frontend was rewritten in in
            React JS (javascript). This front end used what is called the MERN
            stack.
          </Typography>
        </div>
      </div>
      <div className={classes.bulletContainerTwo}>
        <ul>
          <li>
            <b>M</b>ongoDB - document database
          </li>
          <li>
            <b>E</b>xpressJS - Node.js web framework
          </li>
          <li>
            <b>R</b>eactJS - a clicent-side JavaScript framework
          </li>
          <li>
            <b>N</b>odeJS - the premiere JavaScript web server
          </li>
        </ul>
      </div>
      <div className={classes.flexContainerTwo}>
        <div className={classes.paragraphTwo}>
          <Typography>
            This resulted in the client getting a much cleaner, more responsive
            interface and moved the database from a hosted MySQL database to
            MongoDB Atlas. The customer was satisfied with the results of phase
            I.
          </Typography>
        </div>
      </div>
      <Typography className={classes.sectionTitleThree}>
        Technical Challenges & Highlights
      </Typography>
      <div className={classes.bulletContainerTwo}>
        <ul>
          <li>
            Migrate MySQL (Relational Database) to MongoDB (Document Database)
          </li>
          <li>
            Write new database layer in express to replace PHP/MySQL queries
          </li>
        </ul>
      </div>
      {/* //   =================================== */}
      {/* //   Phase II                            */}
      {/* //   =================================== */}
      <Typography className={classes.sectionTitleTwo}>Phase II</Typography>
      <div className={classes.flexContainerTwo}>
        <div className={classes.paragraphTwo}>
          <Typography className={classes.customerNeed}>
            Move to standard REST interface, decoupling the data layer from the
            UI and move to AWS no-SQL
          </Typography>
          <Typography>
            One of the biggest challenges was to migrate from the MongoDB
            document database to the AWS DynamoDB no-sql database. Once the data
            was available, the database calls were abstracted from Express and
            moved to AWS API Gateway and AWS Lambda.
            <br />
            <br />
            This phase also gave us the opportunity to migrate all of the web
            hosting to AWS S3 object storage.
            <br />
            <br />
            This phase made the system data now availalbe within the solution,
            but it also now exposed the opportunity for API interactions with te
            data and not have it embedded in the solution stack.
          </Typography>
        </div>
      </div>
      <Typography className={classes.sectionTitleThree}>
        Technical Challenges & Highlights
      </Typography>
      <div className={classes.bulletContainerTwo}>
        <ul>
          <li>
            Migrate MongoDB (Document Database) to AWS DynamoDB (NOSQL Database)
            <br />
            This data conversion with done in Python.
          </li>
          <li>All API entry points provided in AWS API Gateway</li>
          <li>
            Database interfaces and business logic moved to AWS Lambda functions
          </li>
        </ul>
      </div>
    </div>
  );
}
