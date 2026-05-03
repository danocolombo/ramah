import React, { useState, useEffect, useMemo, useCallback } from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import logo from "../../assets/dcLogo.png";

const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "1.25em",
  },
}));

const LogoImage = styled("img")(({ theme }) => ({
  height: "8em",
  [theme.breakpoints.down("md")]: {
    height: "5em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "5.5em",
  },
  [theme.breakpoints.down("sm")]: {
    height: "6em",
  },
}));

const LogoLinkButton = styled(Button)(() => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const MENU_OPTIONS = [
  { name: "Engineering", link: "/engineering", activeIndex: 1, selectedIndex: 0 },
  {
    name: "AWS Cloud",
    link: "/aws",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "Custom Software",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Enterprise",
    link: "/enterprise",
    activeIndex: 1,
    selectedIndex: 3,
  },
];

export default function Header(props) {
  const theme = useTheme();
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const tabSx = useMemo(
    () => ({
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    }),
    [theme],
  );

  const menuItemSx = useMemo(
    () => ({
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    }),
    [theme],
  );

  const drawerItemSx = useMemo(
    () => ({
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
    }),
    [theme],
  );

  const drawerSelectedSx = useMemo(
    () => ({
      "&.Mui-selected": {
        "& .MuiListItemText-root": {
          opacity: 1,
        },
      },
    }),
    [],
  );

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = useCallback((e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }, []);

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const routes = useMemo(
    () => [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Engineering",
        link: "/engineering",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        mouseOver: (event) => handleClick(event),
      },
      { name: "Recovery", link: "/recovery", activeIndex: 2 },
      { name: "Hobbies", link: "/hobbies", activeIndex: 3 },
      { name: "Contact Me", link: "/contact", activeIndex: 4 },
    ],
    [anchorEl, handleClick],
  );

  useEffect(() => {
    [...MENU_OPTIONS, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        sx={{ marginLeft: "auto" }}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            sx={tabSx}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.common.blue,
            color: "white",
            borderRadius: 0,
          },
        }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {MENU_OPTIONS.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            sx={menuItemSx}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: { backgroundColor: theme.palette.common.blue },
        }}
      >
        <ToolbarMargin />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem key={`${route}${route.activeIndex}`} disablePadding divider>
              <ListItemButton
                component={Link}
                to={route.link}
                selected={props.value === route.activeIndex}
                sx={drawerSelectedSx}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText sx={drawerItemSx} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          "&:hover": { backgroundColor: "transparent" },
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon
          sx={{
            height: "50px",
            width: "50px",
            [theme.breakpoints.down("md")]: {
              height: "40px",
              width: "40px",
              marginRight: "1rem",
              marginLeft: "1rem",
            },
          }}
        />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{ zIndex: theme.zIndex.modal + 1 }}
        >
          <Toolbar disableGutters>
            <LogoLinkButton
              component={Link}
              to="/"
              disableRipple
              onClick={() => props.setValue(0)}
            >
              <LogoImage alt="company logo" src={logo} />
            </LogoLinkButton>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </React.Fragment>
  );
}
