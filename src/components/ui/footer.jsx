import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import footerAdornment from '../../assets/FooterGraphic.svg';
import linkedIn from '../../assets/LinkedInLogo.png';

function getFooterSx(theme) {
    return {
        footer: {
            backgroundColor: theme.palette.common.blue,
            width: '100%',
            zIndex: 1302,
            position: 'relative',
            [theme.breakpoints.down('md')]: {
                height: '75px',
            },
        },
        adornment: {
            width: '25em',
            verticalAlign: 'bottom',
            [theme.breakpoints.down('md')]: {
                width: '21em',
            },
            [theme.breakpoints.down('xs')]: {
                width: '15em',
            },
        },
        mainContainer: {
            position: 'absolute',
        },
        link: {
            color: 'white',
            fontFamily: 'Arial',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textDecoration: 'none',
        },
        linkedInIcon: {
            padding: '2px',
            width: '4rem',
            backgroundColor: 'white',
            [theme.breakpoints.down('xs')]: {
                width: '2.5rem',
            },
        },
        gridItem: {
            margin: '3em',
        },
        socialContainer: {
            position: 'absolute',
            marginTop: '-2.5em',
            left: '.5em',
            [theme.breakpoints.down('xs')]: {
                height: '70%',
            },
            [theme.breakpoints.down('md')]: {
                marginTop: '1em',
            },
        },
        email: {
            fontSize: '1em',
            color: 'white',
        },
    };
}

export default function Footer(props) {
    const theme = useTheme();
    const sx = useMemo(() => getFooterSx(theme), [theme]);
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box component='footer' sx={sx.footer}>
            {matchesMD ? null : (
                <Grid container justifyContent='center' sx={sx.mainContainer}>
                    <Grid item sx={sx.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(0)}
                                to='/'
                                sx={sx.link}
                            >
                                HOME
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={sx.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(0);
                                }}
                                to='/engineering'
                                sx={sx.link}
                            >
                                Engineering
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(1);
                                }}
                                to='/aws'
                                sx={sx.link}
                            >
                                Amazon Web Services (AWS)
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={sx.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(2)}
                                to='/recovery'
                                sx={sx.link}
                            >
                                Recovery
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={sx.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to='/hobbies'
                                sx={sx.link}
                            >
                                Hobbies
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to='/woodshop'
                                sx={sx.link}
                            >
                                Woodshop
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to='/kitchen'
                                sx={sx.link}
                            >
                                Kitchen & Grill
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={sx.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(4)}
                                to='/contact'
                                sx={sx.link}
                            >
                                Contact Me
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {matchesMD ? null : (
                <Box
                    component='img'
                    alt='black decorative slash'
                    src={footerAdornment}
                    sx={sx.adornment}
                />
            )}
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                sx={sx.socialContainer}
            >
                <Grid
                    item
                    component={'a'}
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
                {matchesMD ? (
                    <Grid item>
                        <Typography sx={sx.email}>
                            danocolombo@gmail.com
                        </Typography>
                    </Grid>
                ) : null}
            </Grid>
        </Box>
    );
}
