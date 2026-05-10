import React, { useState, useEffect, useMemo } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import logo from '../../assets/dcLogo.png';
import HeaderMenu2 from './HeaderMenu2';

const ToolbarMargin = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
        marginBottom: '1.25em',
    },
}));

const LogoImage = styled('img')(({ theme }) => ({
    height: '8em',
    [theme.breakpoints.down('md')]: {
        height: '5em',
    },
    [theme.breakpoints.down('xs')]: {
        height: '5.5em',
    },
    [theme.breakpoints.down('sm')]: {
        height: '6em',
    },
}));

const LogoLinkButton = styled(Button)(() => ({
    padding: 0,
    '&:hover': {
        backgroundColor: 'transparent',
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

export default function Header(props) {
    const theme = useTheme();
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = useState(false);

    const drawerItemSx = useMemo(
        () => ({
            ...theme.typography.tab,
            color: 'white',
            opacity: 0.7,
        }),
        [theme],
    );

    const drawerSelectedSx = useMemo(
        () => ({
            '&.Mui-selected': {
                '& .MuiListItemText-root': {
                    opacity: 1,
                },
            },
        }),
        [],
    );

    const routes = useMemo(
        () => [
            { name: 'Home', link: '/', activeIndex: 0 },
            { name: 'Recovery', link: '/recovery', activeIndex: 2 },
            { name: 'Hobbies', link: '/hobbies', activeIndex: 3 },
            { name: 'Engineering', link: '/engineering', activeIndex: 1 },
            { name: 'About Me', link: '/contact', activeIndex: 4 },
        ],
        [],
    );

    const desktopMenuItems = useMemo(
        () => [
            { name: 'Recovery', link: '/recovery', activeIndex: 2 },
            { name: 'Hobbies', link: '/hobbies', activeIndex: 3 },
            { name: 'Engineering', link: '/engineering', activeIndex: 1 },
            { name: 'About Me', link: '/contact', activeIndex: 4 },
        ],
        [],
    );

    useEffect(() => {
        routes.forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                    }
                    break;
                case '/estimate':
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        });
    }, [props.value, routes, props]);

    const desktopMenu = (
        <HeaderMenu2
            items={desktopMenuItems}
            onSelect={props.setValue}
            selectedValue={props.value}
            textColor={theme.palette.secondary.main}
        />
    );

    const drawerRoutes = useMemo(
        () => [
            { name: 'Home', link: '/', activeIndex: 0 },
            ...desktopMenuItems,
        ],
        [desktopMenuItems],
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
                    {drawerRoutes.map((route) => (
                        <ListItem
                            key={`${route.link}${route.activeIndex}`}
                            disablePadding
                            divider
                        >
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
                                <ListItemText
                                    sx={drawerItemSx}
                                    disableTypography
                                >
                                    {route.name}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton
                sx={{
                    marginLeft: 'auto',
                    '&:hover': { backgroundColor: 'transparent' },
                }}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon
                    sx={{
                        height: '50px',
                        width: '50px',
                        [theme.breakpoints.down('md')]: {
                            height: '40px',
                            width: '40px',
                            marginRight: '1rem',
                            marginLeft: '1rem',
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
                    position='fixed'
                    sx={{ zIndex: theme.zIndex.modal + 1 }}
                >
                    <Toolbar disableGutters>
                        <LogoLinkButton
                            component={Link}
                            to='/'
                            disableRipple
                            onClick={() => props.setValue(0)}
                        >
                            <LogoImage alt='company logo' src={logo} />
                        </LogoLinkButton>
                        {matches ? drawer : desktopMenu}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ToolbarMargin />
        </React.Fragment>
    );
}
