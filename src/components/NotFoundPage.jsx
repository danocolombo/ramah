import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

function getNotFoundSx(theme) {
    return {
        page: {
            alignItems: 'center',
            background: `linear-gradient(180deg, ${theme.palette.common.white} 0%, rgba(255, 186, 96, 0.16) 100%)`,
            display: 'flex',
            minHeight: 'calc(100vh - 10rem)',
            paddingBottom: theme.spacing(8),
            paddingTop: theme.spacing(6),
        },
        panel: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: `1px solid rgba(0, 0, 255, 0.12)`,
            borderRadius: theme.spacing(3),
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12)',
            overflow: 'hidden',
            padding: theme.spacing(4),
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(3),
            },
        },
        accentBar: {
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            height: '8px',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
        },
        content: {
            alignItems: 'center',
            display: 'grid',
            gap: theme.spacing(4),
            gridTemplateColumns: 'minmax(240px, 360px) minmax(0, 1fr)',
            [theme.breakpoints.down('md')]: {
                gridTemplateColumns: '1fr',
            },
        },
        animationWrap: {
            alignItems: 'center',
            background: `radial-gradient(circle at top, rgba(255, 186, 96, 0.35), transparent 55%), linear-gradient(135deg, rgba(0, 0, 255, 0.08), rgba(0, 0, 255, 0.02))`,
            border: `1px solid rgba(0, 0, 255, 0.08)`,
            borderRadius: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 280,
            padding: theme.spacing(4),
        },
        statusCode: {
            color: theme.palette.primary.main,
            fontFamily: 'Raleway',
            fontSize: 'clamp(4rem, 10vw, 7rem)',
            fontWeight: 800,
            lineHeight: 1,
            textShadow: '0 10px 30px rgba(0, 0, 255, 0.12)',
        },
        statusCaption: {
            color: theme.palette.secondary.main,
            fontFamily: 'Raleway',
            fontSize: '1rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            marginTop: theme.spacing(1.5),
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        eyebrow: {
            color: theme.palette.secondary.main,
            fontFamily: 'Raleway',
            fontSize: '0.9rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            marginBottom: theme.spacing(1.5),
            textTransform: 'uppercase',
        },
        title: {
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(2),
        },
        body: {
            color: 'rgba(0, 0, 0, 0.72)',
            lineHeight: 1.7,
            maxWidth: '36rem',
        },
        pathChip: {
            backgroundColor: 'rgba(0, 0, 255, 0.06)',
            border: `1px solid rgba(0, 0, 255, 0.12)`,
            borderRadius: 999,
            color: theme.palette.primary.main,
            display: 'inline-flex',
            fontFamily: 'Raleway',
            fontSize: '0.95rem',
            fontWeight: 700,
            marginTop: theme.spacing(2),
            maxWidth: '100%',
            padding: theme.spacing(1, 2),
            wordBreak: 'break-all',
        },
        actions: {
            marginTop: theme.spacing(4),
        },
        primaryButton: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 999,
            color: theme.palette.common.white,
            paddingInline: theme.spacing(3),
            textTransform: 'none',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                opacity: 0.92,
            },
        },
        secondaryButton: {
            borderColor: theme.palette.secondary.main,
            borderRadius: 999,
            color: theme.palette.primary.main,
            paddingInline: theme.spacing(3),
            textTransform: 'none',
        },
    };
}

export default function NotFoundPage() {
    const theme = useTheme();
    const location = useLocation();
    const sx = useMemo(() => getNotFoundSx(theme), [theme]);
    const matchesMD = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={sx.page}>
            <Box
                sx={{
                    marginInline: 'auto',
                    maxWidth: 1200,
                    px: { xs: 2, sm: 3, md: 4 },
                    width: '100%',
                }}
            >
                <Box sx={sx.panel}>
                    <Box sx={sx.accentBar} />
                    <Box
                        sx={{
                            ...sx.content,
                            gridTemplateColumns: matchesMD
                                ? '1fr'
                                : 'minmax(240px, 360px) minmax(0, 1fr)',
                        }}
                    >
                        <Box sx={sx.animationWrap}>
                            <Typography component='p' sx={sx.statusCode}>
                                404
                            </Typography>
                            <Typography component='p' sx={sx.statusCaption}>
                                Route Unsupported
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: matchesMD ? 'center' : 'left' }}>
                            <Typography
                                component='p'
                                sx={{
                                    ...sx.eyebrow,
                                    textAlign: matchesMD ? 'center' : 'left',
                                }}
                            >
                                404 Page Not Found
                            </Typography>
                            <Typography
                                variant={matchesMD ? 'h4' : 'h2'}
                                sx={sx.title}
                            >
                                That page doesn&apos;t exist in this corner of
                                the site.
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={{
                                    ...sx.body,
                                    marginInline: matchesMD ? 'auto' : 0,
                                }}
                            >
                                The address you entered doesn&apos;t match a
                                supported route. Use one of the links below to
                                get back to a valid page.
                            </Typography>
                            <Box
                                sx={{
                                    ...sx.pathChip,
                                    marginInline: matchesMD ? 'auto' : 0,
                                }}
                            >
                                {location.pathname}
                            </Box>
                            <Box
                                sx={{
                                    ...sx.actions,
                                    alignItems: matchesMD
                                        ? 'stretch'
                                        : 'center',
                                    display: 'flex',
                                    flexDirection: matchesMD ? 'column' : 'row',
                                    gap: 2,
                                    justifyContent: matchesMD
                                        ? 'center'
                                        : 'flex-start',
                                }}
                            >
                                <Button
                                    component={Link}
                                    to='/'
                                    variant='contained'
                                    sx={{
                                        ...sx.primaryButton,
                                        width: matchesMD ? '100%' : 'auto',
                                    }}
                                >
                                    Go Home
                                </Button>
                                <Button
                                    component={Link}
                                    to='/contact'
                                    variant='outlined'
                                    sx={{
                                        ...sx.secondaryButton,
                                        width: matchesMD ? '100%' : 'auto',
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
