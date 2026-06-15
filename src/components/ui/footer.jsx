import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FooterLink from './FooterLink';
import linkedIn from '../../assets/LinkedInLogo.png';

const HOME_LINK = { label: 'Home', to: '/' };

function buildNavLinks(setValue, setSelectedIndex) {
    return [
        { label: 'Engineering', to: '/engineering', onClick: () => { setValue(1); setSelectedIndex(0); } },
        { label: 'Amazon Web Services', to: '/aws', onClick: () => { setValue(1); setSelectedIndex(1); } },
        { label: 'Recovery', to: '/recovery', onClick: () => setValue(2) },
        { label: 'Hobbies', to: '/hobbies', onClick: () => setValue(3) },
        { label: 'Woodshop', to: '/woodshop', onClick: () => setValue(3) },
        { label: 'Kitchen & Grill', to: '/kitchen', onClick: () => setValue(3) },
        { label: 'Contact Me', to: '/contact', onClick: () => setValue(4) },
    ];
}

function getFooterSx(theme) {
    return {
        footer: {
            backgroundColor: theme.palette.common.blue,
            width: '100%',
            zIndex: 1302,
            position: 'relative',
            height: '120px',
            [theme.breakpoints.down('md')]: {
                height: '75px',
            },
        },
        navContainer: {
            position: 'absolute',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'flex-start',
            padding: '1.5em 2em',
        },
        navRight: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: '1.25em',
            flex: 1,
        },
        linkedInIcon: {
            padding: '2px',
            width: '4rem',
            backgroundColor: 'white',
            [theme.breakpoints.down('xs')]: {
                width: '2.5rem',
            },
        },
        socialContainer: {
            position: 'absolute',
            bottom: '0.75em',
            left: '0.5em',
        },
        copyright: {
            fontSize: '0.75rem',
            color: 'white',
            mt: '0.25em',
        },
        email: {
            fontSize: '1em',
            color: 'white',
        },
    };
}

export default function Footer({ setValue, setSelectedIndex }) {
    const theme = useTheme();
    const sx = useMemo(() => getFooterSx(theme), [theme]);
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const navLinks = useMemo(
        () => buildNavLinks(setValue, setSelectedIndex),
        [setValue, setSelectedIndex]
    );

    return (
        <Box component='footer' sx={sx.footer}>
            {!matchesMD && (
                <Box sx={sx.navContainer}>
                    <FooterLink
                        label={HOME_LINK.label}
                        to={HOME_LINK.to}
                        onClick={() => setValue(0)}
                    />
                    <Box sx={sx.navRight}>
                        {navLinks.map((link) => (
                            <FooterLink
                                key={link.to}
                                label={link.label}
                                to={link.to}
                                onClick={link.onClick}
                            />
                        ))}
                    </Box>
                </Box>
            )}
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                sx={sx.socialContainer}
            >
                <Grid
                    item
                    component='a'
                    href='https://www.linkedin.com/in/dcolombo/'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <Box
                        component='img'
                        src={linkedIn}
                        alt='Linked In logo'
                        sx={sx.linkedInIcon}
                    />
                </Grid>
                <Grid item>
                    <Typography sx={sx.copyright}>© Dano Colombo 2021-26</Typography>
                </Grid>
                {matchesMD && (
                    <Grid item>
                        <Typography sx={sx.email}>danocolombo@gmail.com</Typography>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
