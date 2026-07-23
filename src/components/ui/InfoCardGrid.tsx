import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

export type GridSize = Partial<
    Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>
>;

export interface InfoCardItem {
    body: string;
    mediaAlt?: string;
    mediaSrc?: string;
    title: string;
}

interface InfoCardGridProps {
    items: InfoCardItem[];
    itemSize?: GridSize;
}

function getInfoCardGridSx(theme: Theme) {
    return {
        card: {
            borderRadius: '16px',
            boxShadow: theme.shadows[3],
            height: '100%',
        },
        cardTitle: {
            color: theme.palette.common.blue,
            fontFamily: 'Raleway',
            fontSize: '1.15rem',
            fontWeight: 700,
            marginBottom: '0.5em',
        },
        cardBody: {
            color: theme.palette.common.grey,
            lineHeight: 1.7,
        },
        mediaWrap: {
            marginBottom: '1em',
            textAlign: 'left',
        },
        mediaImage: {
            display: 'block',
            height: '64px',
            width: '64px',
        },
    };
}

export default function InfoCardGrid({
    items,
    itemSize = { xs: 12, lg: 4 },
}: InfoCardGridProps) {
    const theme = useTheme();
    const sx = useMemo(() => getInfoCardGridSx(theme), [theme]);

    return (
        <Grid container spacing={3}>
            {items.map((item) => (
                <Grid key={item.title} size={itemSize}>
                    <Card sx={sx.card}>
                        <CardContent>
                            {item.mediaSrc ? (
                                <Box sx={sx.mediaWrap}>
                                    <Box
                                        component='img'
                                        sx={sx.mediaImage}
                                        alt={item.mediaAlt || item.title}
                                        src={item.mediaSrc}
                                    />
                                </Box>
                            ) : null}
                            <Typography sx={sx.cardTitle}>
                                {item.title}
                            </Typography>
                            <Typography sx={sx.cardBody}>
                                {item.body}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
