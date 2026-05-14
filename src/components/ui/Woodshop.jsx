import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@mui/material/useMediaQuery';

import background from '../../assets/woodshop.svg';
import mobileBackground from '../../assets/shoptoolsMobile.png';

function getWoodshopSx(theme) {
    return {
        hobbyButton: {
            ...theme.typography.learnButton,
            fontSize: '1em',
            height: 45,
            marginTop: 20,
            paddingLeft: 15,
            backgroundColor: 'yellow',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: 'black',
            },
            [theme.breakpoints.down('sm')]: {
                marginBottom: '2em',
            },
        },
        titleText: {
            color: 'white',
            fontSize: '4em',
            [theme.breakpoints.down('md')]: {
                fontSize: '2em',
            },
        },
        supportText: {
            color: 'white',
            fontSize: '2rem',
        },
        background: {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            height: '60em',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                backgroundImage: `url(${mobileBackground})`,
                backgroundAttachment: 'inherit',
                height: '30em',
            },
        },
        estimateButton: {
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 80,
            width: 205,
            backgroundColor: theme.palette.common.orange,
            fontSize: '1.5rem',
            marginRight: '5em',
            marginLeft: '2em',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
                marginRight: 0,
            },
        },
    };
}

export default function WoodshopDisplay(props) {
    const theme = useTheme();
    const sx = useMemo(() => getWoodshopSx(theme), [theme]);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid
            container
            alignItems='center'
            justifyContent={matchesSM ? 'center' : 'space-between'}
            sx={sx.background}
            direction={matchesSM ? 'column' : 'row'}
        >
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    textAlign: matchesSM ? 'center' : 'inherit',
                }}
            >
                <Grid container direction='column'>
                    <Grid item>
                        <Typography variant='h2' sx={sx.titleText}>
                            There is a time for everything...
                        </Typography>
                        {matchesMD ? null : (
                            <Typography variant='h1' sx={sx.supportText}>
                                It is just real pleasing to take a mental break
                                and do something physical.
                                <br />I find a peaceful place in the woodshop
                            </Typography>
                        )}
                        <Button
                            component={Link}
                            to='/hobbies'
                            sx={sx.hobbyButton}
                            variant='outlined'
                            onClick={() => props.setValue(3)}
                        >
                            <span style={{ marginRight: 10 }}>
                                Check it out
                            </span>
                            <ButtonArrow
                                width={15}
                                height={15}
                                fill={theme.palette.common.black}
                            />
                        </Button>
                        <Grid
                            container
                            justifyContent={matchesSM ? 'center' : undefined}
                            item
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item />
        </Grid>
    );
}
