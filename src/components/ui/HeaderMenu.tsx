import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

interface HeaderMenuOption {
    name: string;
    link: string;
}

interface HeaderMenuProps {
    anchorEl: HTMLElement | null;
    backgroundColor: string;
    menuItemSx: Record<string, unknown>;
    menuOptions: HeaderMenuOption[];
    onClose: () => void;
    onSelect: (index: number) => void;
    open: boolean;
    selectedIndex: number;
    setValue: (value: number) => void;
    value: number;
}

export default function HeaderMenu({
    anchorEl,
    backgroundColor,
    menuItemSx,
    menuOptions,
    onClose,
    onSelect,
    open,
    selectedIndex,
    setValue,
    value,
}: HeaderMenuProps) {
    return (
        <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    backgroundColor,
                    color: 'white',
                    borderRadius: 0,
                },
            }}
            MenuListProps={{
                onMouseLeave: onClose,
            }}
            elevation={0}
            style={{ zIndex: 1302 }}
            keepMounted
        >
            {menuOptions.map((option, index) => (
                <MenuItem
                    key={option.link}
                    component={Link}
                    to={option.link}
                    sx={menuItemSx}
                    onClick={() => {
                        onSelect(index);
                        setValue(1);
                        onClose();
                    }}
                    selected={index === selectedIndex && value === 1}
                >
                    {option.name}
                </MenuItem>
            ))}
        </Menu>
    );
}
