import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import engineeringPic from '../assets/computer_glasses.jpg';

interface PageNavProps {
    setSelectedIndex: (value: number) => void;
    setValue: (value: number) => void;
}

interface CardItem {
    body: string;
    title: string;
}

interface DeliveryPhase {
    body: string;
    highlights: string[];
    label: string;
    title: string;
}

function getEngineeringPageSx(theme: Theme) {
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
            alignItems: 'center',
            columnGap: '2em',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(280px, 0.9fr)',
            marginBottom: '3em',
            [theme.breakpoints.down('lg')]: {
                gridTemplateColumns: '1fr',
            },
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
        heroTitle: {
            marginBottom: '0.5em',
        },
        heroCopy: {
            color: theme.palette.common.grey,
            fontSize: '1.15rem',
            lineHeight: 1.7,
            marginBottom: '1.5em',
            maxWidth: '42rem',
        },
        heroImage: {
            borderRadius: '18px',
            boxShadow: theme.shadows[8],
            display: 'block',
            maxWidth: '100%',
            width: '100%',
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
            maxWidth: '52rem',
        },
        cardGrid: {
            rowGap: '1.5em',
        },
        infoCard: {
            borderRadius: '16px',
            boxShadow: theme.shadows[3],
            height: '100%',
        },
        cardTitle: {
            color: theme.palette.common.blue,
            fontFamily: 'Raleway',
            fontSize: '1.2rem',
            fontWeight: 700,
            marginBottom: '0.5em',
        },
        cardBody: {
            color: theme.palette.common.grey,
            lineHeight: 1.65,
        },
        bulletList: {
            color: theme.palette.common.grey,
            lineHeight: 1.8,
            margin: 0,
            paddingLeft: '1.25em',
        },
        bulletListWide: {
            color: theme.palette.common.grey,
            columns: 2,
            columnGap: '2em',
            lineHeight: 1.9,
            margin: 0,
            paddingLeft: '1.25em',
            [theme.breakpoints.down('lg')]: {
                columns: 1,
            },
        },
        timelineCard: {
            backgroundColor: '#f7f8fc',
            borderLeft: `5px solid ${theme.palette.common.orange}`,
            borderRadius: '14px',
            boxShadow: 'none',
        },
        phaseLabel: {
            color: theme.palette.common.blue,
            fontFamily: 'Raleway',
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '0.5em',
            textTransform: 'uppercase',
        },
        highlightBox: {
            backgroundColor: '#f7f8fc',
            borderRadius: '18px',
            padding: '2em',
        },
    };
}

const capabilityCards: CardItem[] = [
    {
        title: 'Modernization',
        body: 'I help teams improve systems that are already important to the business: replacing unsupported components, improving response time, untangling data access, and moving critical workflows forward without losing continuity.',
    },
    {
        title: 'Custom Software Delivery',
        body: 'From discovery through implementation, I can shape a practical solution around the way a team actually works instead of forcing the problem into a generic platform.',
    },
    {
        title: 'Technical Leadership',
        body: 'I have worked across software delivery, product coordination, SCRUM leadership, client-facing planning, and enterprise execution. That means architecture decisions stay connected to delivery reality.',
    },
];

const clientSituations: string[] = [
    'A legacy application needs to be modernized without interrupting day-to-day operations.',
    'A component, framework, or hosting approach is no longer supported and needs a responsible replacement plan.',
    'Performance, response time, or workflow friction is slowing down the people who rely on the system.',
    'A team needs a clearer API boundary so the UI, business logic, and data model can evolve more safely.',
    'Cloud adoption is on the table, but the business needs someone who can translate architecture into delivery.',
    'A custom workflow is important enough that off-the-shelf software is creating more compromise than value.',
];

const deliveryPhases: DeliveryPhase[] = [
    {
        label: 'Phase I',
        title: 'Modernized the user experience and application stack',
        body: 'A custom meeting-management platform originally built in PHP and MySQL was reworked into a React and Node-based application with a new database approach. The result was a cleaner user workflow, a more responsive interface, and a stronger foundation for future change.',
        highlights: [
            'Rebuilt the front end in React.',
            'Replaced direct PHP/MySQL access with a dedicated service layer.',
            'Migrated data from MySQL to MongoDB Atlas.',
        ],
    },
    {
        label: 'Phase II',
        title: 'Decoupled the system and moved the data/API layer to AWS',
        body: 'The next step was to separate the UI from the data layer, introduce standard REST interfaces, and move core backend responsibilities into managed AWS services. That created a better platform for reuse, integration, and long-term scalability.',
        highlights: [
            'Migrated MongoDB data into DynamoDB.',
            'Moved API entry points into API Gateway.',
            'Shifted business logic into Lambda functions.',
            'Moved web hosting to AWS S3.',
        ],
    },
];

const strengthAreas: string[] = [
    'Application modernization and migration planning',
    'React and Node-based application delivery',
    'API design and service-layer refactoring',
    'Relational and NoSQL data transitions',
    'AWS-based hosting, APIs, and serverless execution',
    'Cross-functional delivery in enterprise environments',
];

export default function EngineeringPage({ setValue }: PageNavProps) {
    const theme = useTheme();
    const sx = useMemo(() => getEngineeringPageSx(theme), [theme]);

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
                    <Typography color='text.primary'>Engineering</Typography>
                </Breadcrumbs>
            </Grid>
            <Box sx={sx.content}>
                <Box sx={sx.hero}>
                    <Box>
                        <Typography sx={sx.eyebrow}>
                            Software Consulting
                        </Typography>
                        <Typography variant='h2' sx={sx.heroTitle}>
                            Software engineering for systems that already
                            matter.
                        </Typography>
                        <Typography sx={sx.heroCopy}>
                            I help organizations improve, modernize, and extend
                            important software systems. That includes custom
                            application delivery, architectural cleanup, cloud
                            migration, API design, and the practical leadership
                            needed to move work from idea to release.
                        </Typography>
                        <Stack sx={sx.actionRow} direction='row'>
                            <Button
                                component={RouterLink}
                                to='/contact'
                                sx={sx.primaryButton}
                                variant='contained'
                                onClick={() => setValue(4)}
                            >
                                Start a conversation
                            </Button>
                            <Button
                                component={RouterLink}
                                to='/aws'
                                sx={sx.secondaryButton}
                                variant='outlined'
                                onClick={() => setValue(1)}
                            >
                                Explore AWS work
                            </Button>
                        </Stack>
                    </Box>
                    <Box>
                        <Box
                            component='img'
                            sx={sx.heroImage}
                            alt='Software engineering workspace'
                            src={engineeringPic}
                        />
                    </Box>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>Where I help</Typography>
                    <Typography sx={sx.sectionIntro}>
                        Instead of separating custom software, enterprise work,
                        and modernization into different pages, the better way
                        to understand the work is by the kind of outcome you
                        need.
                    </Typography>
                    <Grid container spacing={3} sx={sx.cardGrid}>
                        {capabilityCards.map((card) => (
                            <Grid item xs={12} lg={4} key={card.title}>
                                <Card sx={sx.infoCard}>
                                    <CardContent>
                                        <Typography sx={sx.cardTitle}>
                                            {card.title}
                                        </Typography>
                                        <Typography sx={sx.cardBody}>
                                            {card.body}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        Common client situations
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        These are the kinds of problems that usually justify a
                        focused engineering engagement.
                    </Typography>
                    <Box component='ul' sx={sx.bulletListWide}>
                        {clientSituations.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </Box>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        Selected delivery example
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        One engagement evolved from a traditional web
                        application into a more modern, cloud-backed platform
                        through staged delivery rather than a risky all-at-once
                        rewrite.
                    </Typography>
                    <Grid container spacing={3}>
                        {deliveryPhases.map((phase) => (
                            <Grid item xs={12} lg={6} key={phase.label}>
                                <Card sx={sx.timelineCard}>
                                    <CardContent>
                                        <Typography sx={sx.phaseLabel}>
                                            {phase.label}
                                        </Typography>
                                        <Typography sx={sx.cardTitle}>
                                            {phase.title}
                                        </Typography>
                                        <Typography sx={sx.cardBody}>
                                            {phase.body}
                                        </Typography>
                                        <Box component='ul' sx={sx.bulletList}>
                                            {phase.highlights.map(
                                                (highlight) => (
                                                    <li key={highlight}>
                                                        {highlight}
                                                    </li>
                                                ),
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>Core strengths</Typography>
                    <Box sx={sx.highlightBox}>
                        <Box component='ul' sx={sx.bulletListWide}>
                            {strengthAreas.map((strength) => (
                                <li key={strength}>{strength}</li>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box sx={sx.section}>
                    <Typography sx={sx.sectionTitle}>
                        Need a deeper AWS view?
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        If cloud architecture, serverless delivery, or AWS
                        credentials are central to your decision, the AWS page
                        goes deeper into the services, certifications, and
                        delivery patterns I use.
                    </Typography>
                    <Button
                        component={RouterLink}
                        to='/aws'
                        sx={sx.secondaryButton}
                        variant='outlined'
                        onClick={() => setValue(1)}
                    >
                        View AWS specialization
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
