import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import mobileBackground from "../assets/aci-terzza-sunset-mobile.png";
// import background from "../assets/aci-terzza-sunset.jpg";
import background from "../assets/creativeInspiration.jpg";
import mobileBackground from "../assets/creativeInspiration.jpg";

import KitchenDisplay from "./ui/Kitchen";
import WoodshopDisplay from "./ui/Woodshop";

import recoveryBackground from "../assets/repeatingBackground.svg";

function getLandingPageSx(theme) {
  return {
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
      width: "100%",
      height: "25em",
    },
  },
  introWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
    paddingLeft: "2em",
    paddingRight: "2em",
    justifyContent: "center",
  },
  introductionParagraph: {
    color: theme.palette.common.white,
    // marginTop: "10em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // marginTop: 0,
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      justify: "center",
      justifyContent: "center",
      align: "center",
      justifyItems: "center",
      width: "100%",
    },
  },
  quoter: {
    alignItems: "center",
    marginLeft: "15rem",
    fontStyle: "italic",
    fontSize: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      color: theme.palette.common.white,
      textAlign: "center",
    },
  },
  recoveryContainer: {
    height: "30em",
    marginTop: "0em",
    alignItems: "center",
    justify: "center",
  },
  recoveryCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "1em",
    [theme.breakpoints.down("md")]: {
      paddingTop: "1em",
      paddingBottom: "1em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  recoveryBackground: {
    backgroundImage: `url(${recoveryBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  recoveryQutote: {
    marginBottom: "1em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  engineeringButton: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    alignContent: "center",
    backgroundColor: "white",
    padding: 5,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButtonRecovery: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    topMargin: "5em",
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
  mainContainer: {
    marginTop: "1em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  // heroTextContainer: {
  //   minWidth: "21.5em",
  //   marginLeft: "4em",
  //   alignItems: "center",
  //   color: theme.palette.common.orange,
  //   [theme.breakpoints.down("xs")]: {
  //     marginLeft: 0,
  //   },
  // },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  revolutionBackground: {
    backgroundImage: `url(${recoveryBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  };
}



export default function LandingPage(props) {
  const theme = useTheme();
  const sx = useMemo(() => getLandingPageSx(theme), [theme]);

  return (
    <Grid container direction="column" sx={sx.mainContainer}>
      <Box sx={sx.background}>
        <Box sx={sx.introWrapper}>
          <Typography variant="h4" sx={sx.introductionParagraph}>
            to contribute to something that makes a real difference in other
            people's lives
          </Typography>
          <div align="center">
            <Box sx={sx.buttonContainer}>
              <Button
                component={Link}
                to="/engineering"
                sx={sx.engineeringButton}
                variant="outlined"
                align="center"
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 10 }}>Difference</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Box>
          </div>
        </Box>
      </Box>

      <Grid item>
        {/*-----The Recovery Block-----*/}
        <Grid
          container
          // style={{ height: "40em", marginTop: "0em" }}
          // alignItems="center"
          justifyContent="center"
          sx={sx.recoveryContainer}
        >
          <Card sx={sx.recoveryCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    Recovery Advocate
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={sx.recoveryQutote}
                  >
                    I understood myself only after I destroyed myself; and only
                    <br />
                    in the process of healing, have I come to know who I really
                    am.
                  </Typography>
                  <Button
                    component={Link}
                    to="/recovery"
                    sx={sx.learnButtonRecovery}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box sx={sx.recoveryBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Woodshop Block-----*/}
        <WoodshopDisplay setValue={props.setValue} />
      </Grid>
      <Grid item>
        {/*-----Kitchen Block-----*/}
        <KitchenDisplay setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
