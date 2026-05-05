import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ButtonArrow from './ButtonArrow';

function getFeatureCardSx(theme) {
  return {
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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    flexLeft: {
      textAlign: 'center',
      lineHeight: '75px',
      fontSize: '30px',
      flex: '35%',
      [theme.breakpoints.down('md')]: {
        width: '90%',
        flex: '100%',
      },
    },
    flexRight: {
      marginLeft: '2em',
      textAlign: 'left',
      lineHeight: '75px',
      fontSize: '30px',
      flex: '65%',
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
        width: '100%',
        textAlign: 'center',
        flex: '100%',
      },
    },
    bodyText: {
      fontSize: '1.25rem',
      color: theme.palette.common.black,
      fontWeight: 400,
    },
    iconImage: {
      marginLeft: '2em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    sectionButton: {
      ...theme.typography.learnButton,
      fontSize: '0.7rem',
      height: 35,
      padding: 5,
      [theme.breakpoints.down('sm')]: {
        marginBottom: '2em',
      },
    },
    // card variant
    card: {
      position: 'absolute',
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      padding: '1em',
      [theme.breakpoints.down('md')]: {
        paddingTop: '1em',
        paddingBottom: '1em',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: '100%',
      },
    },
    cardBodyText: {
      marginBottom: '1em',
    },
    cardButton: {
      ...theme.typography.learnButton,
      fontSize: '0.9rem',
      height: 45,
      width: 145,
    },
  };
}

/**
 * FeatureCard — two display variants:
 *
 * variant="section" (default)
 *   Renders a titled two-column row: body text + optional Learn More button on
 *   the left, an icon image on the right. Mirrors the Engineering page section
 *   pattern.
 *
 *   Props: title, body (string | string[] | ReactNode[]), icon, iconAlt,
 *          iconWidth, linkTo, linkLabel, onNavigate
 *
 * variant="card"
 *   Renders an elevated, absolutely-positioned MUI Card with centered title,
 *   body text, and a Learn More button. Mirrors the Landing page Recovery card.
 *
 *   Props: title, body (string | ReactNode), linkTo, linkLabel, onNavigate
 */
export default function FeatureCard({
  title,
  body,
  icon,
  iconAlt = '',
  iconWidth = '250em',
  linkTo,
  linkLabel = 'Learn More',
  onNavigate,
  variant = 'section',
}) {
  const theme = useTheme();
  const sx = useMemo(() => getFeatureCardSx(theme), [theme]);

  const renderBodyLines = () => {
    if (typeof body === 'string') {
      return <Typography sx={sx.bodyText}>{body}</Typography>;
    }
    if (Array.isArray(body)) {
      return body.map((line, i) => (
        <Typography key={i} sx={sx.bodyText}>{line}</Typography>
      ));
    }
    return body;
  };

  if (variant === 'card') {
    return (
      <Card sx={sx.card}>
        <CardContent>
          <Grid container direction="column" style={{ textAlign: 'center' }}>
            {title && (
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  {title}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="subtitle1" sx={sx.cardBodyText}>
                {body}
              </Typography>
              {linkTo && (
                <Button
                  component={Link}
                  to={linkTo}
                  sx={sx.cardButton}
                  variant="outlined"
                  onClick={onNavigate}
                >
                  <span style={{ marginRight: 10 }}>{linkLabel}</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {title && <Typography sx={sx.sectionTitle}>{title}</Typography>}
      <Box sx={sx.flexContainer}>
        <Box sx={sx.flexLeft}>
          {renderBodyLines()}
          {linkTo && (
            <Button
              component={Link}
              to={linkTo}
              variant="outlined"
              sx={sx.sectionButton}
              onClick={onNavigate}
            >
              <span style={{ marginRight: 10 }}>{linkLabel}</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          )}
        </Box>
        {icon && (
          <Box sx={sx.flexRight}>
            <Box
              component="img"
              sx={sx.iconImage}
              alt={iconAlt}
              src={icon}
              width={iconWidth}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
