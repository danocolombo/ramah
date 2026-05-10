import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface HeaderMenu2Item {
    activeIndex: number;
    link: string;
    name: string;
}

interface HeaderMenu2Props {
    items: HeaderMenu2Item[];
    onSelect: (value: number) => void;
    selectedValue: number;
    textColor: string;
}

export default function HeaderMenu2({
    items,
    onSelect,
    selectedValue,
    textColor,
}: HeaderMenu2Props) {
    const theme = useTheme();
    const matches = useMediaQuery('(max-width:850px)');
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);

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

    if (matches) {
        return (
            <React.Fragment>
                <SwipeableDrawer
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
                        {drawerItems.map((item) => (
                            <ListItem
                                key={`${item.link}${item.activeIndex}`}
                                disablePadding
                                divider
                            >
                                <ListItemButton
                                    component={Link}
                                    to={item.link}
                                    selected={
                                        selectedValue === item.activeIndex
                                    }
                                    sx={drawerSelectedSx}
                                    onClick={() => {
                                        setOpenDrawer(false);
                                        onSelect(item.activeIndex);
                                    }}
                                >
                                    <ListItemText
                                        sx={drawerItemSx}
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
                <Button
                    key={item.link}
                    component={Link}
                    to={item.link}
                    disableRipple
                    onClick={() => onSelect(item.activeIndex)}
                    sx={(theme) => ({
                        ...menuTextSx,
                        borderBottom:
                            selectedValue === item.activeIndex
                                ? `2px solid ${textColor}`
                                : '2px solid transparent',
                        borderRadius: 0,
                        color: textColor,
                        minWidth: 'fit-content',
                        opacity: selectedValue === item.activeIndex ? 1 : 0.8,
                        paddingX: 1.5,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            opacity: 1,
                        },
                    })}
                >
                    {item.name}
                </Button>
            ))}
        </Box>
    );
}
