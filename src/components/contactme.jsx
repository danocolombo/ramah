import React, { useState, Fragment, useMemo } from "react";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

// import background from "../assets/background.jpg";
import background from "../assets/programmingScreens.png";
import mobileBackground from "../assets/mobileBackground.jpg";
import emailIcon from "../assets/email.svg";
import paperAirplane from "../assets/send.svg";

function getcontactmeSx(theme) {
  return {
  background: {
    backgroundImage: `url(${background})`,
    opacity: "60%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 15,
    height: "45em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  breadcrumbsContainer: {
    marginLeft: "2em",
  },
  fishingBox: {
    backgroundColor: "white",
    padding: "2em",
    borderRadius: 8,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    // ...theme.typography.estimate,
    background: `${theme.palette.common.blue}`,
    color: `${theme.palette.common.blue}`,
    backgroundColor: `${theme.palette.common.blue}`,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },

  };
}



export default function Contact() {
  const theme = useTheme();
  const sx = useMemo(() => getcontactmeSx(theme), [theme]);

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  const onConfirm = () => {
    const to = import.meta.env.VITE_CONTACT_EMAIL || "danocolombo@gmail.com";
    const subject = encodeURIComponent("DColombo.com Web Site Message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAlert({ open: true, color: "#4BB543" });
    setAlertMesssage(
      "Your mail app should open—send the message from there to finish."
    );
  };
  const buttonContents = (
    <Fragment>
      Send Message
      <img
        src={paperAirplane}
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </Fragment>
  );
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={sx.breadcrumbsContainer}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Main
            </Link>
            <Typography color="text.primary">Contact Me</Typography>
          </Breadcrumbs>
        </Box>
        <Grid container direction="row">
          <Grid
            item
            container
            direction="column"
            style={{
              marginBottom: matchesMD ? "5em" : 0,
              marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
            }}
            justifyContent="center"
            alignItems="center"
            lg={4}
            xl={3}
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h2"
                    align={matchesMD ? "center" : undefined}
                    style={{ lineHeight: 1 }}
                  >
                    Contact Me
                  </Typography>
                  <Typography
                    variant="body1"
                    align={matchesMD ? "center" : undefined}
                    style={{
                      color: theme.palette.common.blue,
                      paddingLeft: "10px",
                      paddingRight: "20px",
                    }}
                  >
                    Drop me a direct message, <br />
                    or use the form below.
                  </Typography>
                </Grid>
                {/* <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone image"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a href="tel:7066042494" style={{textDecoration: "none", color:"inherit"}}>(706) 604-2494</a>
                </Typography>
              </Grid>
            </Grid> */}
                <Grid item container style={{ marginBottom: "2em" }}>
                  <Grid item>
                    <img
                      src={emailIcon}
                      alt="email"
                      style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      style={{
                        color: theme.palette.common.blue,
                        fontSize: "1rem",
                      }}
                    >
                      <a
                        href="mailto:dano.colombo@gmail.com"
                        target="_new"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        dano.colombo@gmail.com
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  style={{ maxWidth: "20em" }}
                >
                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      label="Name"
                      fullWidth
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Grid>
                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      label="Email"
                      id="email"
                      error={emailHelper.length !== 0}
                      helperText={emailHelper}
                      fullWidth
                      value={email}
                      // onChange={(event) => setEmail(event.target.value)}
                      onChange={onChange}
                    />
                  </Grid>
                  <Grid item style={{ marginBottom: "0.5em" }}>
                    <TextField
                      label="Phone"
                      id="phone"
                      error={phoneHelper.length !== 0}
                      helperText={phoneHelper}
                      fullWidth
                      value={phone}
                      onChange={onChange}
                      //onChange={(event) => setPhone(event.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid item style={{ maxWidth: "20em" }}>
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    id="message"
                    fullWidth
                    sx={sx.message}
                    value={message}
                    multiline
                    rows={10}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  style={{ marginTop: "2em" }}
                >
                  <Button
                    onClick={() => setOpen(true)}
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      email.length === 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0 ||
                      emailHelper.length !== 0
                    }
                    variant="contained"
                    sx={sx.sendButton}
                  >
                    {buttonContents}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Dialog
            style={{ zIndex: 1302 }}
            open={open}
            fullScreen={matchesXS}
            onClose={() => setOpen(false)}
            PaperProps={{
              style: {
                paddingTop: matchesXS ? "1em" : "5em",
                paddingBottom: matchesXS ? "1em" : "5em",
                paddingLeft: matchesXS
                  ? 0
                  : matchesSM
                  ? "5em"
                  : matchesMD
                  ? "10em"
                  : "20em",
                paddingRight: matchesXS
                  ? 0
                  : matchesSM
                  ? "5em"
                  : matchesMD
                  ? "10em"
                  : "20em",
              },
            }}
          >
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography align="center" variant="h4" gutterBottom>
                    Confirm message
                  </Typography>
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Name"
                    fullWidth
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Email"
                    id="email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    fullWidth
                    value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Phone"
                    id="phone"
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    fullWidth
                    value={phone}
                    onChange={onChange}
                    //onChange={(event) => setPhone(event.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  fullWidth
                  sx={sx.message}
                  value={message}
                  multiline
                  rows={10}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                style={{ marginTop: "2em" }}
                alignItems="center"
              >
                <Grid item>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    // onClick={() => setOpen(true)}
                    onClick={onConfirm}
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      email.length === 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0 ||
                      emailHelper.length !== 0
                    }
                    variant="contained"
                    sx={sx.sendButton}
                  >
                    {buttonContents}
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
          <Snackbar
            open={alert.open}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={() => setAlert({ ...alert, open: false })}
            autoHideDuration={4000}
          >
            <Alert
              onClose={() => setAlert({ ...alert, open: false })}
              severity="success"
              variant="filled"
              sx={{ width: "100%", bgcolor: alert.color || "#4BB543" }}
            >
              {alertMessage}
            </Alert>
          </Snackbar>
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            sx={sx.background}
            alignItems="center"
            justifyContent={matchesMD ? "center" : undefined}
            lg={8}
            xl={9}
          >
            <Grid
              item
              style={{
                marginLeft: matchesMD ? 0 : "3em",
                textAlign: matchesMD ? "center" : "inherit",
              }}
            >
              <Grid container direction="column">
                <Grid item sx={sx.fishingBox}>
                  <Typography
                    variant="h2"
                    align={matchesMD ? "center" : undefined}
                  >
                    Have challenges?
                    <br />
                    Need help?
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ fontSize: "1.5rem", color: "black" }}
                    align={matchesMD ? "center" : undefined}
                  >
                    No job too small
                  </Typography>
                  <Grid
                    container
                    justifyContent={matchesMD ? "center" : undefined}
                    item
                  >
                    {/* <Button
                      component={Link}
                      to="/revolution"
                      variant="outlined"
                      sx={sx.learnButton}
                      onClick={() => props.setValue(2)}
                    >
                      <span style={{ marginRight: 5 }}>Learn More</span>
                      <ButtonArrow
                        width={10}
                        height={10}
                        fill={theme.palette.common.blue}
                      />
                    </Button> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Button
                component={Link}
                to="/estimate"
                variant="contained"
                sx={sx.estimateButton}
                onClick={() => props.setValue(5)}
              >
                Free Estimate
              </Button> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
