import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
                        ...theme.typography.tab,
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
