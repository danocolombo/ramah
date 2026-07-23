import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@mui/material/useMediaQuery';

import background from '../../assets/kitchenIngredients.webp';
import mobileBackground from '../../assets/kitchenIngredients.webp';

function getKitchenSx(theme) {
    return {
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
        kitchenText: {
            color: 'white',
            fontSize: '4em',
            [theme.breakpoints.down('md')]: {
                fontSize: '1.5em',
            },
        },
        supportText: {
            color: 'white',
            fontSize: '2rem',
        },
        hobbyButton: {
            ...theme.typography.learnButton,
            fontSize: '1em',
            height: 45,
            paddingleft: 15,
            marginTop: 10,
            backgroundColor: 'red',
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
                color: 'black',
            },
            [theme.breakpoints.down('sm')]: {
                marginBottom: '2em',
            },
        },
    };
}

export default function KitchenDisplay(props) {
    const theme = useTheme();
    const sx = useMemo(() => getKitchenSx(theme), [theme]);
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
                        <Typography variant='h2' sx={sx.kitchenText}>
                            We have to eat...
                            <br />
                            we don&apos;t have to be bored.
                        </Typography>
                        {matchesMD ? null : (
                            <Typography variant='h1' sx={sx.supportText}>
                                Here are some things that make my life special
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
                                fill={theme.palette.common.white}
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
