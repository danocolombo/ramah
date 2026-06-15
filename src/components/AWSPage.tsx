import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import InfoCardGrid from './ui/InfoCardGrid';
import type { InfoCardItem } from './ui/InfoCardGrid';

import AWS_SAA_Logo from '../assets/AWS-SolutionArchitect.png';
import AWS_DA_Logo from '../assets/AWS-DeveloperAssociate.png';
import AWS_CP_Logo from '../assets/AWS-CloudPractitioner.png';
import AWS_Serverless from '../assets/AWS_Serverless.svg';
import AWS_Amplify from '../assets/AWS_Amplify.svg';
import AWS_APIGateway from '../assets/AWS_APIGateway.svg';
import AWS_Lambda from '../assets/AWS_Lambda.svg';
import AWS_RDS from '../assets/AWS_RDS.svg';
import AWS_DynamoDB from '../assets/AWS_DynamoDB.svg';

interface PageNavProps {
    setSelectedIndex: (value: number) => void;
    setValue: (value: number) => void;
}

interface CertificationItem {
    alt: string;
    src: string;
}

function getAWSPageSx(theme: Theme) {
    return {
        mainContainer: {
            marginTop: '2em',
            paddingBottom: '4em',
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
            marginBottom: '1.5em',
        },
        content: {
            margin: '0 auto',
            maxWidth: '1100px',
            paddingLeft: '2em',
            paddingRight: '2em',
        },
        hero: {
            backgroundColor: '#f7f8fc',
            borderRadius: '18px',
            marginBottom: '3em',
            padding: '2em',
        },
        eyebrow: {
            color: theme.palette.secondary.main,
            fontFamily: 'Raleway',
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '1em',
            textTransform: 'uppercase',
        },
        heroCopy: {
            color: theme.palette.text.secondary,
            fontSize: '1.1rem',
            lineHeight: 1.75,
            marginBottom: '1.5em',
            maxWidth: '46rem',
        },
        section: {
            marginBottom: '3em',
        },
        sectionTitle: {
            color: theme.palette.common.black,
            fontFamily: 'Raleway',
            fontSize: '1.7rem',
            fontWeight: 700,
            marginBottom: '0.75em',
        },
        sectionIntro: {
            color: theme.palette.text.secondary,
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: '1.25em',
            maxWidth: '50rem',
        },
        certCard: {
            alignItems: 'center',
            borderRadius: '16px',
            boxShadow: theme.shadows[3],
            display: 'flex',
            justifyContent: 'center',
            minHeight: '150px',
            padding: '1.5em',
        },
        certIcon: {
            height: '95px',
            maxWidth: '100%',
        },
        bulletList: {
            color: theme.palette.text.primary,
            lineHeight: 1.9,
            margin: 0,
            paddingLeft: '1.25em',
        },
        actionRow: {
            columnGap: '1em',
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: '1em',
        },
        primaryButton: {
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            height: 42,
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
            '&:hover': {
                backgroundColor: theme.palette.warning.main,
                borderColor: theme.palette.warning.main,
                color: theme.palette.common.black,
            },
        },
        secondaryButton: {
            height: 42,
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        },
    };
}

const expertiseItems: InfoCardItem[] = [
    {
        title: 'Serverless application patterns',
        body: 'API-driven systems built on managed compute and event-friendly architecture — with service boundaries designed to be easier to operate and maintain than traditional server-heavy deployments.',
    },
    {
        title: 'Data and integration modernization',
        body: 'Moving from embedded data access to clean API layers, evolving data models where the structure no longer fits the need, and making backend capabilities reusable across the system rather than duplicated within it.',
    },
    {
        title: 'Practical cloud architecture',
        body: 'Choosing AWS services that fit the problem — and keeping the implementation practical for the team that has to support, maintain, and extend it after the engagement closes.',
    },
];

const knowledgeItems: InfoCardItem[] = [
    {
        title: 'Serverless foundations',
        body: 'Lambda and API Gateway together provide a clean path for moving business logic and external interfaces into managed services — eliminating the overhead of traditional application servers while keeping the architecture easy to reason about.',
        mediaSrc: AWS_Serverless,
    },
    {
        title: 'User access and application experience',
        body: 'Amplify handles application hosting and identity-oriented workflows where frontend integration and centralized user management need to stay in sync — without building and maintaining that coordination layer from scratch.',
        mediaSrc: AWS_Amplify,
    },
    {
        title: 'Data storage and modeling',
        body: 'RDS fits relational workloads where structure and consistency are the priority. DynamoDB is the better choice when the data shape, access patterns, or scale requirements have outgrown a rigid relational model — or when a move away from it is the modernization goal itself.',
        mediaSrc: AWS_RDS,
    },
    {
        title: 'API layer design',
        body: 'API Gateway brings clear external interfaces, secure entry points, and a proper service boundary between the UI layer and the business logic behind it.',
        mediaSrc: AWS_APIGateway,
    },
    {
        title: 'Business logic execution',
        body: "Lambda keeps focused business functions close to the services they support — and eliminates the operational cost of maintaining always-on infrastructure for work that doesn't require it.",
        mediaSrc: AWS_Lambda,
    },
];

const certificationItems: CertificationItem[] = [
    {
        alt: 'AWS Certified Solutions Architect',
        src: AWS_SAA_Logo,
    },
    {
        alt: 'AWS Certified Developer Associate',
        src: AWS_DA_Logo,
    },
    {
        alt: 'AWS Certified Cloud Practitioner',
        src: AWS_CP_Logo,
    },
];

export default function AWSPage({ setValue }: PageNavProps) {
    const theme = useTheme();
    const sx = useMemo(() => getAWSPageSx(theme), [theme]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={sx.mainContainer}>
            <Box sx={sx.breadcrumbsContainer}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link
                        component={RouterLink}
                        underline='hover'
                        color='inherit'
                        to='/'
                    >
                        Main
                    </Link>
                    <Link
                        component={RouterLink}
                        underline='hover'
                        color='inherit'
                        to='/engineering'
                    >
                        Engineering
                    </Link>
                    <Typography color='text.primary'>AWS Cloud</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={sx.content}>
                <Box sx={sx.hero}>
                    <Typography sx={sx.eyebrow}>AWS Specialization</Typography>
                    <Typography variant='h2' sx={{ marginBottom: '0.5em' }}>
                        AWS architecture that's built to deliver, not just to
                        impress.
                    </Typography>
                    <Typography sx={sx.heroCopy}>
                        AWS expertise is only valuable when it moves a business
                        goal forward. I work with organizations on the AWS
                        problems that actually matter — modernizing legacy
                        platforms, decoupling tightly coupled stacks, improving
                        scalability, and building cleaner API and data
                        foundations.
                    </Typography>
                    <Stack sx={sx.actionRow} direction='row'>
                        <Button
                            component={RouterLink}
                            to='/contact'
                            sx={sx.primaryButton}
                            variant='contained'
                            onClick={() => setValue(4)}
                        >
                            Discuss an AWS project
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/engineering'
                            sx={sx.secondaryButton}
                            variant='outlined'
                            onClick={() => setValue(1)}
                        >
                            Back to Engineering
                        </Button>
                    </Stack>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>Certifications</Typography>
                    <Typography sx={sx.sectionIntro}>
                        AWS credentials matter most when they support real
                        implementation experience. These certifications
                        reinforce hands-on work across architecture, application
                        delivery, and cloud fundamentals.
                    </Typography>
                    <Grid container spacing={3}>
                        {certificationItems.map((cert) => (
                            <Grid size={{ xs: 12, lg: 4 }} key={cert.alt}>
                                <Card sx={sx.certCard}>
                                    <Box
                                        component='img'
                                        sx={sx.certIcon}
                                        alt={cert.alt}
                                        src={cert.src}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        What the AWS engagement covers
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        The scope adapts to what the organization needs —
                        whether that's shaping an overall cloud direction or
                        stepping in on a specific architecture, delivery, or
                        migration challenge that needs experienced hands.
                    </Typography>
                    <InfoCardGrid items={expertiseItems} />
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        Hands-on across the AWS stack
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        Not every engagement requires the full stack. Some
                        organizations need help in one service area, a focused
                        implementation, or targeted improvements to an existing
                        solution. AWS can also be introduced as a hybrid layer
                        alongside existing systems — supporting modernization
                        and integration without requiring a full migration.
                    </Typography>
                    <InfoCardGrid items={knowledgeItems} />
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        Is this the right engagement?
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        AWS doesn't have to mean starting over. If any of these
                        describe your situation, it's worth a conversation:
                    </Typography>
                    <Box component='ul' sx={sx.bulletList}>
                        <li>
                            You need AWS-specific depth alongside broader
                            software engineering experience — not one or the
                            other.
                        </li>
                        <li>
                            You're moving toward a serverless, API-first, or
                            hybrid cloud architecture and need someone who can
                            take it from design through delivery.
                        </li>
                        <li>
                            You have an existing system that needs targeted
                            improvement — better hosting, cleaner interfaces,
                            cloud-based integration, or a more scalable data
                            model — without a full rebuild.
                        </li>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
