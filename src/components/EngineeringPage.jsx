import React, { useEffect, useMemo } from 'react';
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import FeatureCard from './ui/FeatureCard';
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
  };
}



export default function EngineeringPage(props) {
    const theme = useTheme();
  const sx = useMemo(() => getEngineeringPageSx(theme), [theme]);

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
            <FeatureCard
                title="AWS Cloud Technology"
                body={[
                    'Leader in Cloud Technology. Experience through the stack.',
                    'Design, architecture, development and delivery. Not just training.',
                ]}
                icon={AWSLogo}
                iconAlt="AWS logo"
                linkTo="/aws"
                onNavigate={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                }}
            />
            {/** //   SECTION 3 */}
            <FeatureCard
                title="Custom Software"
                body={[
                    'Save Energy. Save Time. Save Money.',
                    <>
                        Complete digital solutions, from investigation to{' '}
                        <Box
                            component="span"
                            sx={{ fontFamily: 'Pacifico', color: theme.palette.common.orange }}
                        >
                            celebration.
                        </Box>
                    </>,
                ]}
                icon={customSoftwareIcon}
                iconAlt="custom software icon"
                linkTo="/customsoftware"
                onNavigate={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                }}
            />
        </Box>
    );
}
