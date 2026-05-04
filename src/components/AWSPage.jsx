import React, { useEffect, useMemo } from 'react';
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

import AWS_SAA_Logo from '../assets/AWS-SolutionArchitect.png';
import AWS_DA_Logo from '../assets/AWS-DeveloperAssociate.png';
import AWS_CP_Logo from '../assets/AWS-CloudPractitioner.png';
import AWS_Serverless from '../assets/AWS_Serverless.svg';
import AWS_Amplify from '../assets/AWS_Amplify.svg';
import AWS_APIGateway from '../assets/AWS_APIGateway.svg';
import AWS_Lambda from '../assets/AWS_Lambda.svg';
import AWS_RDS from '../assets/AWS_RDS.svg';
import AWS_DynamoDB from '../assets/AWS_DynamoDB.svg';
import customSoftwareIcon from '../assets/customSoftwareIcon.svg';

function getAWSPageSx(theme) {
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
    techContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    techLeft: {
        // border: '1px solid blue',
        // backgroundColor: "#f1f1f1",
        // marginTop: 0,
        // marginBottom: 0,
        textAlign: 'right',
        // padding: '10px',
        // marginRight: '2em',
        // lineHeight: '75px',
        // fontSize: '30px',
        flex: '30%',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            marginTop: 0,
            marginBottom: 0,
            width: '100%',
            flex: '100%',
        },
    },
    techRight: {
        // border: '1px solid blue',
        // backgroundColor: "#f1f1f1",
        // marginTop: 0,
        // marginBottom: 0,
        // marginLeft: '2em',
        // textAlign: 'left',
        // lineHeight: '75px',
        // fontSize: '30px',
        flex: '70%',
        marginBottom: '2em',
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            width: '100%',
            textAlign: 'center',
            flex: '100%',
        },
    },
    icon: {
        marginRight: '30px',
    },
    techTopic: {
        fontWeight: 'bold',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    techDescription: {
        textAlign: 'left',
        paddingRight: '30%',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
            paddingLeft: '2em',
            paddingRight: '2em',
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
    certIcon: {
        height: '100px',
    },
    quoted: {
        fontStyle: 'italic',
    },

  };
}



export default function AWSPage() {
    const theme = useTheme();
  const sx = useMemo(() => getAWSPageSx(theme), [theme]);

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
                    <Link underline='hover' color='inherit' href='/engineering'>
                        Engineering
                    </Link>
                    <Typography color='text.primary'>AWS</Typography>
                </Breadcrumbs>
            </Grid>
            {/** //   SECTION 1 */}
            <Typography sx={sx.sectionTitle}>
                Officially Certified
            </Typography>
            <Box sx={sx.flexContainer}>
                <Box sx={sx.flexLeft}>
                    <Typography>
                        Serious needs, requires serious commitment.
                    </Typography>
                    <Typography variant='subtitle1'>
                        Not just getting a free account and messing around on
                        YouTube.
                        {matchesSM ? null : <br />}But actually taking the time
                        to get seriously educated and experienced.
                    </Typography>
                </Box>
                <Box sx={sx.flexRight}>
                    <Box component="img"
                        sx={sx.certIcon}
                        alt='AWS Certified Architect'
                        src={AWS_SAA_Logo}
                        // width="250em"
                    />
                    {matchesSM ? null : <br />}
                    <Box component="img"
                        sx={sx.certIcon}
                        alt='AWS Certified Developer'
                        src={AWS_DA_Logo}
                        // width="250em"
                    />
                    {matchesSM ? null : <br />}
                    <Box component="img"
                        sx={sx.certIcon}
                        alt='AWS Cloud Practioner'
                        src={AWS_CP_Logo}
                        // width="250em"
                    />
                </Box>
            </Box>
            {/** //   SECTION 2 */}
            <Typography sx={sx.sectionTitle}>
                Full-Stack Experience
            </Typography>
            <Box sx={sx.flexContainer}>
                <Box sx={sx.flexLeft}>
                    <Typography>
                        Top to bottom; {matchesSM ? null : <br />}Inside-out.
                    </Typography>
                    <Typography>
                        From domains, storage, databases, APIs and front-end
                        development.
                        {matchesSM ? null : <br />}Doing what is necessary to
                        make things happen.
                    </Typography>
                </Box>
                <Box sx={sx.flexRight}>
                    {/* {matchesMD ? null : ( */}
                    <Grid item sx={sx.gridItemB2}>
                        <Box component="img"
                            sx={sx.icon}
                            alt='custom software'
                            src={customSoftwareIcon}
                            width='250em'
                        />
                    </Grid>
                    {/* )} */}
                </Box>
            </Box>
            {/** //   SECTION 3 */}
            <Box sx={sx.techContainer}>
                <Box sx={sx.techLeft}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='AWS Serverless1'
                        src={AWS_Serverless}
                        // width="250em"
                    />
                </Box>
                <Box sx={sx.techRight}>
                    <Typography sx={sx.techTopic}>
                        AWS Serverless
                    </Typography>
                    <Typography sx={sx.techDescription}>
                        Serverless computing offers a number of advantages over
                        traditional cloud-based or server-centric
                        infrastructure. For many developers, serverless
                        architectures offer greater scalability, more
                        flexibility, and quicker time to release, all at a
                        reduced cost.
                    </Typography>
                </Box>
                <Box sx={sx.techLeft}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='AWS Amplify1'
                        src={AWS_Amplify}
                        // width="250em"
                    />
                </Box>
                <Box sx={sx.techRight}>
                    <Typography sx={sx.techTopic}>
                        AWS Amplify
                    </Typography>
                    <Typography sx={sx.techDescription}>
                        Certralized user management, supporting user federation
                        authentication, across platforms and integrating backend
                        services.
                    </Typography>
                </Box>
                <Box sx={sx.techLeft}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='AWS API Gateway'
                        src={AWS_APIGateway}
                        // width="250em"
                    />
                </Box>
                <Box sx={sx.techRight}>
                    <Typography sx={sx.techTopic}>
                        API Gateway
                    </Typography>
                    <Typography sx={sx.techDescription}>
                        Robust, scalable and secure REST APIs available in the
                        cloud without the need for provisioning or maintaining
                        host servers. Focus on the SAAS API you need and leave
                        the server maintenance to AWS.
                    </Typography>
                </Box>
                <Box sx={sx.techLeft}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='AWS Lambda'
                        src={AWS_Lambda}
                        // width="250em"
                    />
                </Box>
                <Box sx={sx.techRight}>
                    <Typography sx={sx.techTopic}>
                        Lambda Functions
                    </Typography>
                    <Typography sx={sx.techDescription}>
                        Execution in the cloud with no need to for system
                        resources or maintenance. Get work done and focus on the
                        business needs.
                    </Typography>
                </Box>
                <Box sx={sx.techLeft}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='AWS RDS'
                        src={AWS_RDS}
                        // width="250em"
                    />
                </Box>
                <Box sx={sx.techRight}>
                    <Typography sx={sx.techTopic}>
                        Relational Databases
                    </Typography>
                    <Typography sx={sx.techDescription}>
                        Relational databases that include MySQL, PostgreSQL, and
                        MariaDB
                    </Typography>
                </Box>
                <Box sx={sx.techLeft}>
                    <Box component="img"
                        sx={sx.icon}
                        alt='AWS DynamoDB'
                        src={AWS_DynamoDB}
                        // width="250em"
                    />
                </Box>
                <Box sx={sx.techRight}>
                    <Typography sx={sx.techTopic}>
                        No-SQL Databases
                    </Typography>
                    <Typography sx={sx.techDescription}>
                        DynamoDB is a fully managed, key-value, and document
                        database that delivers single-digit-millisecond
                        performance at any scale.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
