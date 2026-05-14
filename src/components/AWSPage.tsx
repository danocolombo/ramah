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
            color: theme.palette.common.orange,
            fontFamily: 'Raleway',
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '1em',
            textTransform: 'uppercase',
        },
        heroCopy: {
            color: theme.palette.common.grey,
            fontSize: '1.1rem',
            lineHeight: 1.75,
            marginBottom: '1.5em',
            maxWidth: '46rem',
        },
        section: {
            marginBottom: '3em',
        },
        sectionTitle: {
            color: theme.palette.common.blue,
            fontFamily: 'Raleway',
            fontSize: '1.7rem',
            fontWeight: 700,
            marginBottom: '0.75em',
        },
        sectionIntro: {
            color: theme.palette.common.grey,
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
            color: theme.palette.common.grey,
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
            ...theme.typography.learnButton,
            backgroundColor: theme.palette.common.blue,
            borderColor: theme.palette.common.blue,
            color: theme.palette.common.white,
            height: 42,
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
            '&:hover': {
                backgroundColor: theme.palette.common.orange,
                borderColor: theme.palette.common.orange,
                color: theme.palette.common.black,
            },
        },
        secondaryButton: {
            ...theme.typography.learnButton,
            height: 42,
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        },
    };
}

const expertiseItems: InfoCardItem[] = [
    {
        title: 'Serverless application patterns',
        body: 'Experience designing and implementing API-driven systems with managed compute, event-friendly architecture, and service boundaries that are easier to maintain than traditional server-heavy deployments.',
    },
    {
        title: 'Data and integration modernization',
        body: 'Experience moving from embedded data access to clearer API layers, changing data models where needed, and making backend capabilities more reusable across the system.',
    },
    {
        title: 'Practical cloud architecture',
        body: 'Guidance on choosing AWS services that fit the problem while keeping the implementation practical for the team that has to support, maintain, and extend the system afterward.',
    },
];

const knowledgeItems: InfoCardItem[] = [
    {
        title: 'Serverless foundations',
        body: 'Lambda and API Gateway provide a clean path for moving business logic and external interfaces into managed services without running traditional application servers.',
        mediaSrc: AWS_Serverless,
    },
    {
        title: 'User access and application experience',
        body: 'Amplify supports application hosting and identity-oriented workflows where centralized user management and frontend integration need to stay coordinated.',
        mediaSrc: AWS_Amplify,
    },
    {
        title: 'Relational and NoSQL data options',
        body: 'RDS services fit relational workloads, while DynamoDB is useful when a scalable key-value or document model better matches the system shape and access patterns.',
        mediaSrc: AWS_RDS,
    },
    {
        title: 'API layer design',
        body: 'API Gateway works well when a solution needs clear external interfaces, secure entry points, and a service layer that is no longer embedded inside the UI stack.',
        mediaSrc: AWS_APIGateway,
    },
    {
        title: 'Business logic execution',
        body: 'Lambda keeps focused business functions close to the services they support and reduces the operational burden of maintaining always-on infrastructure.',
        mediaSrc: AWS_Lambda,
    },
    {
        title: 'NoSQL modernization',
        body: 'DynamoDB can be the right target when a system benefits from managed scale, predictable performance, and a move away from a more rigid relational model.',
        mediaSrc: AWS_DynamoDB,
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
            <Grid item sx={sx.breadcrumbsContainer}>
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
            </Grid>
            <Box sx={sx.content}>
                <Box sx={sx.hero}>
                    <Typography sx={sx.eyebrow}>AWS Specialization</Typography>
                    <Typography variant='h2' sx={{ marginBottom: '0.5em' }}>
                        AWS delivery for modernization, APIs, data, and
                        serverless systems.
                    </Typography>
                    <Typography sx={sx.heroCopy}>
                        This page is the specialist view for organizations that
                        need confidence in AWS architecture and delivery. My AWS
                        work is strongest when it is tied to a practical
                        business goal: modernizing an existing platform,
                        decoupling a legacy stack, improving scalability, or
                        creating a cleaner API and data foundation.
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
                            <Grid item xs={12} lg={4} key={cert.alt}>
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
                        AWS expertise and support
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        I can help with architecture, implementation,
                        modernization, and focused problem-solving. Sometimes
                        that means shaping a broader cloud direction, and
                        sometimes it means stepping into a specific AWS task,
                        service, or delivery challenge that needs experienced
                        support.
                    </Typography>
                    <InfoCardGrid items={expertiseItems} />
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        Available AWS knowledge
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        These are some of the AWS areas where I can contribute.
                        A project does not need to use all of them. In many
                        cases, a client may only need help in one service area,
                        a focused implementation task, or updates to a smaller
                        existing solution. AWS can also be introduced as a
                        hybrid approach alongside existing systems, supporting
                        integration, modernization, and selective improvement
                        without requiring a full lift-and-shift migration.
                    </Typography>
                    <InfoCardGrid items={knowledgeItems} />
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        When AWS expertise is the right fit
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        AWS is not only useful for brand-new cloud platforms or
                        full migrations. It can also support hybrid solutions
                        that connect with existing applications, data stores,
                        and business workflows when the right next step is
                        integration or targeted modernization rather than full
                        replacement.
                    </Typography>
                    <Box component='ul' sx={sx.bulletList}>
                        <li>
                            You want AWS-specific depth in addition to general
                            software engineering experience.
                        </li>
                        <li>
                            You are considering a serverless, API-first, or
                            hybrid cloud direction and want someone who can
                            connect design decisions to delivery.
                        </li>
                        <li>
                            You need help improving an existing system through
                            better hosting, clearer interfaces, cloud-based
                            integration points, or a more scalable data model.
                        </li>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
