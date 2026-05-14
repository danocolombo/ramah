import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface HeaderMenuItem {
    activeIndex: number;
    link: string;
    name: string;
    subItems?: HeaderMenuItem[];
}

interface HeaderMenuProps {
    items: HeaderMenuItem[];
    onSelect: (value: number) => void;
    selectedValue: number;
    textColor: string;
}

export default function HeaderMenu({
    items,
    onSelect,
    selectedValue,
    textColor,
}: HeaderMenuProps) {
    const theme = useTheme();
    const matches = useMediaQuery('(max-width:850px)');
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [openMenuName, setOpenMenuName] = useState<string | null>(null);

    const menuTextSx = useMemo(
        () => ({
            fontFamily: 'Raleway',
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'none',
        }),
        [],
    );

    const drawerItemSx = useMemo(
        () => ({
            ...menuTextSx,
            color: 'white',
            opacity: 0.7,
        }),
        [menuTextSx],
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

    const drawerItems = useMemo(
        () => [{ name: 'Home', link: '/', activeIndex: 0 }, ...items],
        [items],
    );

    const flatDrawerItems = useMemo(
        () =>
            drawerItems.flatMap((item) =>
                item.subItems && item.subItems.length > 0
                    ? [
                          item,
                          ...item.subItems.filter(
                              (subItem) => subItem.link !== item.link,
                          ),
                      ]
                    : [item],
            ),
        [drawerItems],
    );

    const handleMenuOpen = (
        event: React.MouseEvent<HTMLElement>,
        itemName: string,
    ) => {
        setAnchorEl(event.currentTarget);
        setOpenMenuName(itemName);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenuName(null);
    };

    if (matches) {
        return (
            <React.Fragment>
                <SwipeableDrawer
                    anchor='right'
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    onOpen={() => setOpenDrawer(true)}
                    slotProps={{
                        paper: {
                            sx: { backgroundColor: theme.palette.primary.main },
                        },
                    }}
                >
                    <Box sx={theme.mixins.toolbar} />
                    <List disablePadding>
                        {flatDrawerItems.map((item) => (
                            <ListItem
                                key={`${item.link}-${item.name}`}
                                disablePadding
                                divider
                            >
                                <ListItemButton
                                    component={Link}
                                    to={item.link}
                                    selected={
                                        selectedValue === item.activeIndex
                                    }
                                    sx={{
                                        ...drawerSelectedSx,
                                        pl: item.subItems
                                            ? 2
                                            : item.link !== '/' &&
                                                drawerItems.some((parentItem) =>
                                                    parentItem.subItems?.some(
                                                        (subItem) =>
                                                            subItem.link ===
                                                            item.link,
                                                    ),
                                                )
                                              ? 5
                                              : undefined,
                                    }}
                                    onClick={() => {
                                        setOpenDrawer(false);
                                        onSelect(item.activeIndex);
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            ...drawerItemSx,
                                            opacity:
                                                item.link !== '/' &&
                                                drawerItems.some((parentItem) =>
                                                    parentItem.subItems?.some(
                                                        (subItem) =>
                                                            subItem.link ===
                                                            item.link,
                                                    ),
                                                )
                                                    ? 0.9
                                                    : drawerItemSx.opacity,
                                        }}
                                        disableTypography
                                    >
                                        {item.name}
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
                            color: textColor,
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
    }

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                gap: 1,
                marginLeft: 'auto',
            }}
        >
            {items.map((item) => (
                <React.Fragment key={item.link}>
                    <Button
                        component={Link}
                        to={item.link}
                        disableRipple
                        onClick={() => {
                            onSelect(item.activeIndex);
                            handleMenuClose();
                        }}
                        onMouseEnter={
                            item.subItems
                                ? (event) => handleMenuOpen(event, item.name)
                                : undefined
                        }
                        sx={() => ({
                            ...menuTextSx,
                            borderBottom:
                                selectedValue === item.activeIndex
                                    ? `2px solid ${textColor}`
                                    : '2px solid transparent',
                            borderRadius: 0,
                            color: textColor,
                            minWidth: 'fit-content',
                            opacity:
                                selectedValue === item.activeIndex ? 1 : 0.8,
                            paddingX: 1.5,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                opacity: 1,
                            },
                        })}
                    >
                        {item.name}
                    </Button>
                    {item.subItems ? (
                        <Menu
                            anchorEl={anchorEl}
                            open={openMenuName === item.name}
                            onClose={handleMenuClose}
                            slotProps={{
                                list: {
                                    onMouseLeave: handleMenuClose,
                                },
                                paper: {
                                    sx: {
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        borderRadius: 0,
                                        color: theme.palette.common.white,
                                    },
                                },
                            }}
                            elevation={0}
                            keepMounted
                        >
                            {item.subItems.map((subItem) => (
                                <MenuItem
                                    key={subItem.link}
                                    component={Link}
                                    to={subItem.link}
                                    onClick={() => {
                                        onSelect(subItem.activeIndex);
                                        handleMenuClose();
                                    }}
                                    sx={{
                                        ...menuTextSx,
                                        color: theme.palette.common.white,
                                        opacity: 0.85,
                                        '&:hover': {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    {subItem.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    ) : null}
                </React.Fragment>
            ))}
        </Box>
    );
}