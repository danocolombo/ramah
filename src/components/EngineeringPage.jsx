import React, { useEffect, useMemo } from 'react';
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

import ButtonArrow from './ui/ButtonArrow';
import engineeringPic from '../assets/computer_glasses.jpg';
import customSoftwareIcon from '../assets/customSoftwareIcon.svg';
import AWSLogo from '../assets/AWS_Logo.svg';

function getEngineeringPageSx(theme) {
  return {
    mainContainer: {
        marginTop: '2em',
        [theme.breakpoints.down('md')]: {
            marginTop: '-2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        },
    },
    breadcrumbsContainer: {
        marginLeft: '2em',
        marginTop: '-2em',
    },
    sectionTitle: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: '1em',
        fontFamily: 'Raleway',
        fontSize: '1.75rem',
        color: theme.palette.common.blue,
        fontWeight: 700,
    },
    flexContainer: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: "DodgerBlue",
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    flexLeft: {
        // border: '1px solid blue',
        // backgroundColor: "#f1f1f1",
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'center',
        lineHeight: '75px',
        fontSize: '30px',
        flex: '35%',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            marginBottom: 0,
            width: '90%',
            flex: '100%',
        },
    },
    flexRight: {
        // border: '1px solid blue',
        // backgroundColor: "#f1f1f1",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '2em',
        textAlign: 'left',
        lineHeight: '75px',
        fontSize: '30px',
        flex: '65%',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            width: '100%',
            textAlign: 'center',
            flex: '100%',
        },
    },
    sectionText: {
        fontSize: '1.25rem',
        color: theme.palette.common.black,
        fontWeight: 400,
    },
    graphic: {
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
            marginTop: '1em',
        },
    },
    quoted: {
        fontStyle: 'italic',
    },
    learnMoreButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em',
        },
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em',
        },
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
    },
    gridItemB2: {},
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange,
    },

  };
}



export default function EngineeringPage(props) {
    const theme = useTheme();
  const sx = useMemo(() => getEngineeringPageSx(theme), [theme]);

    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={sx.mainContainer}>
            <Grid item sx={sx.breadcrumbsContainer}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link underline='hover' color='inherit' href='/'>
                        Main
                    </Link>
                    <Typography color='text.primary'>Engineering</Typography>
                </Breadcrumbs>
            </Grid>
            {/** //   SECTION 1 */}
            <Typography sx={sx.sectionTitle}>
                Software Engineering
            </Typography>
            <Box sx={sx.flexContainer}>
                <Box sx={sx.flexLeft}>
                    <Typography sx={sx.sectionText}>
                        “Strive for perfection in everything you do. Take the
                        best that exists and make it better. When it does not
                        exist, design it.”
                    </Typography>
                    <Typography variant='subtitle1' sx={sx.quoted}>
                        Sir Henry Royce
                    </Typography>
                </Box>
                <Box sx={sx.flexRight}>
                    <Box component="img"
                        sx={sx.graphic}
                        alt='desktop view'
                        src={engineeringPic}
                        height='200px'
                    />
                </Box>
            </Box>
            {/** //   SECTION 2 */}
            <Typography sx={sx.sectionTitle}>
                AWS Cloud Technology
            </Typography>
            <Box sx={sx.flexContainer}>
                <Box sx={sx.flexLeft}>
                    <Typography sx={sx.sectionText}>
                        Leader in Cloud Technology. Experience through the
                        stack.
                    </Typography>
                    <Typography sx={sx.sectionText}>
                        Design, architecture, development and delivery.
                        {matchesSM ? null : <br />}Not just training.
                    </Typography>
                    <Button
                        component={Link}
                        href='/aws'
                        to='/aws'
                        variant='outlined'
                        sx={sx.learnMoreButton}
                        onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(2);
                        }}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        {/* <span>Learn More</span> */}
                        <ButtonArrow
                            width={10}
                            height={10}
                            fill={theme.palette.common.blue}
                        />
                    </Button>
                </Box>
                <Box sx={sx.flexRight}>
                    {/* {matchesMD ? null : ( */}
                    <Grid item sx={sx.gridItemB2}>
                        <Box component="img"
                            sx={sx.icon}
                            alt='mobile phone icon'
                            src={AWSLogo}
                            width='250em'
                        />
                    </Grid>
                    {/* )} */}
                </Box>
            </Box>
            {/** //   SECTION 3 */}
            <Typography sx={sx.sectionTitle}>
                Custom Software
            </Typography>
            <Box sx={sx.flexContainer}>
                <Box sx={sx.flexLeft}>
                    <Typography sx={sx.sectionText}>
                        Save Energy. {matchesSM ? null : <br />}Save Time.{' '}
                        {matchesSM ? null : <br />}Save Money.
                    </Typography>
                    <Typography sx={sx.sectionText}>
                        Complete digital solutions, from investigation to{' '}
                        <Box component="span" sx={sx.specialText}>
                            celebration.
                        </Box>
                    </Typography>
                    <Button
                        component={Link}
                        to='/customsoftware'
                        href='/customsoftware'
                        variant='outlined'
                        sx={sx.learnButton}
                        onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(1);
                        }}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow
                            width={10}
                            height={10}
                            fill={theme.palette.common.blue}
                        />
                    </Button>
                </Box>
                <Box sx={sx.flexRight}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='custom software icon'
                        src={customSoftwareIcon}
                        width='250em'
                    />
                </Box>
            </Box>
        </Box>
    );
}
