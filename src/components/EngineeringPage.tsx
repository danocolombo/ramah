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
        body: "Aging systems don't have to be liabilities. I help organizations replace unsupported components, resolve performance bottlenecks, untangle data access layers, and advance critical workflows — without disrupting the operations that depend on them.",
    },
    {
        title: 'Custom Software Delivery',
        body: 'Off-the-shelf tools solve generic problems. When the problem is specific to how your organization works, I design and deliver software built around that reality — from initial discovery through production release.',
    },
    {
        title: 'Technical Leadership',
        body: "Good architecture means nothing if it can't be executed. With experience across delivery management, product coordination, SCRUM leadership, and enterprise client work, I keep technical decisions grounded in what it actually takes to ship.",
    },
    {
        title: 'Operational Readiness',
        body: 'Shipping is not the finish line. From the first design decision, I factor in production support, cost of ownership, and long-term maintainability — so what gets built is something your team can actually own, operate, and extend.',
    },
];

const clientSituations: string[] = [
    'A legacy application needs to be modernized without interrupting the operations that depend on it.',
    'A component, framework, or hosting environment is no longer supported — and the replacement needs to be handled responsibly.',
    'Performance issues or workflow friction are slowing down the people the system is supposed to serve.',
    'The team needs cleaner API boundaries so the UI, business logic, and data model can evolve without constant breakage.',
    'Cloud adoption is the right move, but the business needs someone who can connect architecture decisions to actual delivery.',
    'A workflow is critical enough that forcing it into off-the-shelf software is creating more compromise than value.',
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
            <Grid sx={sx.breadcrumbsContainer}>
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
                            Senior-level engineering for complex, high-stakes
                            systems.
                        </Typography>
                        <Typography sx={sx.heroCopy}>
                            I work with organizations that need more than a
                            developer — they need someone who can assess what's
                            broken, design what comes next, and lead the work
                            from concept to production. Custom applications,
                            legacy modernization, cloud migration, API design.
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
                        The work doesn't fit neatly into categories — but the
                        outcomes do. Whether the system needs to be fixed,
                        built, or led, the engagement is shaped around what you
                        actually need to accomplish.
                    </Typography>
                    <Grid container spacing={3} sx={sx.cardGrid}>
                        {capabilityCards.map((card) => (
                            <Grid size={{ xs: 12, lg: 4 }} key={card.title}>
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
                        Does this sound familiar?
                    </Typography>
                    <Typography sx={sx.sectionIntro}>
                        These are the situations that usually bring
                        organizations to me.
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
                            <Grid size={{ xs: 12, lg: 6 }} key={phase.label}>
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
