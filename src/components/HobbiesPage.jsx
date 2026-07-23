import React, { useEffect, useMemo } from 'react';
import Box from "@mui/material/Box";
import { styled, useTheme } from '@mui/material/styles';
// import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

//these are for kitchen recipes
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import TechSledPic from '../assets/TechSled.webp';
import CoatRack from '../assets/WS-Coat-Rack.webp';
import ShoeBench from '../assets/WS-Shoe-Bench.webp';
import Desk from '../assets/WS-Desk.webp';
//kitchen images
import SalsaPic from '../assets/kitchen/salsa.webp';
import GuacPic from '../assets/kitchen/guac-square.webp';
import BBQChickenMarinade from '../assets/kitchen/marinaded-chicken.webp';

//========================================
// * Don' forget this
// ! it will hurt....
// TODO: clean up the unused code
//   if you use 3 spaces you get YELLOW
//+++++++++++++++++++++++++++++++++++++++++

function getHobbiesPageSx(theme) {
  return {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1em',
        alignItems: 'left',
        width: '100%',
        // [theme.breakpoints.down('md')]: {
        //     marginTop: '3em',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     marginTop: '2em',
        // },
    },
    breadcrumbsContainer: {
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '1em',
        },
    },
    hobbyBlock: {
        marginTop: '1em',
        width: '100%',
        textAlign: 'center',
    },
    centeredTitle: {
        fontSize: '3.5rem',
    },
    basicParagraph: {
        marginLeft: '3%',
        marginRight: '3%',
    },
    wasBasicParagraph: {
        marginLeft: '10em',
        marginTop: '0em',
        marginBottom: '2em',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
            marginTop: 0,
            marginRight: '2em',
            marginBottom: 0,
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            marginLeft: '3rem',
            marginTop: 0,
            marginRight: '3em',
            marginBottom: 0,
        },
    },
    sectionHeader: {
        marginLeft: '5em',
    },
    sectionParagraph: {
        // marginLeft: "5em",
        marginTop: '0em',
        marginBottom: '2em',
        minWidth: '21.5em',
        maxWidth: '21.5em',
    },
    woodPic: {
        // height: "4rem",
        padding: '2px',
        // width: "4rem",
        height: '400px',
        alignItems: 'left',

        backgroundColor: 'white',
        // [theme.breakpoints.down('xs')]: {
        //     // height: "2.5rem",
        //     width: '2.5rem',
        // },
    },
    woodGalleryContainer: {
        marginLeft: '20em',
        [theme.breakpoints.down('md')]: {
            marginLeft: '10%',
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: '10%',
        },
    },
    woodGaleryList: {
        width: '80%',
        // height: 800,
        [theme.breakpoints.down('md')]: {
            width: '80%',
            // height: 400,
        },
        [theme.breakpoints.down('lg')]: {
            width: '80%',
            // height: 600,
        },
    },
    recipeContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        [theme.breakpoints.down('md')]: {
            marginLeft: '2%',
            marginRight: '2%',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '10%',
            marginRight: '10%',
        },
    },
    recipeCard: {
        maxWidth: 500,
    },
    recipePic: {
        height: 300,
        // width: 100,
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        // [theme.breakpoints.down('xs')]: {
        //     marginLeft: 0,
        // },
    },
    recoveryCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        // [theme.breakpoints.down('sm')]: {
        //     paddingTop: '8em',
        //     paddingBottom: '8em',
        //     paddingLeft: 0,
        //     paddingRight: 0,
        //     borderRadius: 0,
        //     width: '100%',
        // },
    },
    SobrietyRecoveryDefs: {
        alignItems: 'center',
        // fontFamily: "Tahoma",
        marginTop: '5px',
        marginBottom: '5px',
        fontWeight: 600,
    },
    findGroupButtom: {
        ...theme.typography.goButton,
        backgroundColor: theme.palette.common.red,
        fontSize: '0.7rem',
        height: 35,
        width: 200,
        textAlign: 'center',
        padding: 5,
        marginBottom: '2em',
        // [theme.breakpoints.down('sm')]: {
        //     marginBottom: '2em',
        // },
    },

  };
}



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    void expand;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function HobbiesPage() {
    const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme();
  const sx = useMemo(() => getHobbiesPageSx(theme), [theme]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const defaultOptions = {
    //   loop: true,
    //   autoplay: true,
    //   animationData: animationData,
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice",
    //   },
    // };
    return (
        <Box sx={sx.mainContainer}>
            <Grid item sx={sx.breadcrumbsContainer}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link underline='hover' color='inherit' href='/'>
                        Main
                    </Link>
                    <Typography color='text.primary'>Hobbies</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item sx={sx.hobbyBlock}>
                <Typography variant='body1' sx={sx.basicParagraph}>
                    There are times of hard work, but there also has to be a
                    balance of difference. The moments of just escaping from the
                    moment into a healthy interaction. Not to waste time, but
                    also to get some sense of acheivement and accomplishment.
                    These are a few of my favorite things...
                </Typography>
            </Grid>
            <Grid item sx={sx.hobbyBlock}>
                {/*-----Woodshop Block-----*/}
                <Typography
                    variant='h2'
                    id='woodshop'
                    sx={sx.centeredTitle}
                >
                    Woodworking
                </Typography>
            </Grid>
            <Grid item sx={sx.hobbyBlock}>
                <Typography sx={sx.basicParagraph}>
                    It started all the way back in middle school, or what we
                    used to call Junior High. It was a great class that gave me
                    a sense of worth and accomplishment. To be able to make
                    something that I could say was mine, felt so good.
                    <br />
                    That outlet has been dormant for decades and life got busy,
                    but in the last few years of battling the pandemic of COVID,
                    I have found my way back.
                    <br />
                    Not just just waste time, or get my mind off things, but to
                    actually be creative and produce and construct from nothing
                    to something.
                </Typography>
            </Grid>
            <Grid item sx={sx.hobbyBlock}>
                <Box component="img"
                    sx={sx.woodPic}
                    alt='Tech Sled'
                    src={TechSledPic}
                />
            </Grid>
            <Grid sx={sx.woodGalleryContainer}>
                <ImageList sx={sx.woodGaleryList}>
                    <ImageListItem key='Subheader' cols={2}>
                        <ListSubheader component='div'>
                            <Typography variant='h3'>
                                Project Gallery
                            </Typography>
                        </ListSubheader>
                    </ImageListItem>
                    {woodshopProjectData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=400&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading='lazy'
                            />
                            <ImageListItemBar
                                title={item.title}
                                // subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.54)',
                                        }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>

            <Grid item sx={sx.hobbyBlock}>
                {/*-----Kitchen Block-----*/}
                <Typography variant='h2' sx={sx.centeredTitle}>
                    Kitchen
                </Typography>
            </Grid>
            <Grid item sx={sx.hobbyBlock}>
                <Typography sx={sx.basicParagraph}>
                    It takes a lot of energy to focus and work hard, then when
                    we have a hobby that also requires us eo exert more physical
                    energy, we need to re-fuel.
                    <br />
                    I had to learn to cook at a very young age, and I have
                    always enjoyed the challenges of taking a recipe and
                    finishing the dish to the end.
                    <br />
                    <br />
                    Now over the years, I have discovered and returned to some
                    special recipes, and you will find them below.
                </Typography>
            </Grid>
            {/* RECIPES */}
            <Grid sx={sx.recipeContainer}>
                {recipes.map((recipe) => (
                    <Card key={recipe.title} sx={sx.recipeCard}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ bgcolor: red[500] }}
                                    aria-label='recipe'
                                >
                                    FIRE
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label='settings'>
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={recipe.title}
                            subheader='September 14, 2016'
                        />
                        <Box component="img"
                            src={recipe.picture}
                            alt='salsa'
                            sx={sx.recipePic}
                        />

                        <CardContent>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: recipe.overview,
                                }}
                            />
                        </CardContent>
                        {/* <CardContent>recipe.overview</CardContent> */}
                        <CardActions disableSpacing>
                            <div>
                                <span>view details</span>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label='show more'
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </div>
                        </CardActions>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            <CardContent>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: recipe.description,
                                    }}
                                />
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </Grid>
        </Box>
    );
}
//woodshop projects
const woodshopProjectData = [
    {
        img: CoatRack,
        title: 'Coat Rack',
        author: '@bkristastucchio',
    },
    {
        img: ShoeBench,
        title: 'Entry Way Bench',
        author: '@rollelflex_graphy726',
    },
    {
        img: Desk,
        title: 'Desk',
        author: '@rollelflex_graphy726',
    },
];

//recipes
const recipes = [
    {
        title: 'Hot Salsa',
        origin: 'original',
        picture: SalsaPic,
        overview: `<Typography variant="body2" color="text.secondary">
    This impressive paella is a perfect party dish and a fun meal
    to cook together with your guests. Add 1 cup of frozen peas
    along with the mussels, if you like.
  </Typography>`,
        description: `<Typography sx={sx.sectionParagraph}>
    It started all the way back in middle school, or what we used to
    call Junior High. It was a great class that gave me a sense of
    worth and accomplishment. To be able to make something that I
    could say was mine, felt so good.
    <br />
    That outlet has been dormant for decades and life got busy, but in
    the last few years of battling the pandemic of COVID, I have found
    my way back.
    <br />
    Not just just waste time, or get my mind off things, but to
    actually be creative and produce and construct from nothing to
    something.
  </Typography>`,
    },
    {
        title: 'Gunpowder Guac',
        picture: GuacPic,
        origin: 'modified from Betty Crocker party recipes',
        overview: `<Typography sx={sx.sectionParagraph}>Avacados with a flavorful kick.</Typography>`,
        description: `<Typography sx={sx.sectionParagraph}>
    <B>INGREDIENTS</B><br/>
    2 avacados, chopped<br/>
    1 T lime juice<br/>
    1/2 cup roasted red pepper, chopped<br/>
    bunch of green onions, thinly sliced<br/>
    1 jalepeno or 2 serano peppers<br/>
    salt<br/>
    pepper<br/>
    1/8 t cayanne pepper powder</Typography>`,
    },
    {
        title: 'BBQ Chicken Marinade',
        picture: BBQChickenMarinade,
        origin: 'https://www.momontimeout.com/the-best-chicken-marinade-recipe/',
        overview: `<Typography sx={sx.sectionParagraph}>A delicious new marinade that we tried and immediately everyone said, "It's a keeper", Enjoy!!</Typography>`,
        description: `<Typography sx={sx.sectionParagraph}>
        Mix all ingredients in dish or ziplock and marinade chicken, then grill.
    <B>INGREDIENTS</B><br/>
    1/2 C olive oil<br/>
    1/2 C balsamic vinegar<br/>
    3/4 C brown sugar<br/>
    1/4 C low sodium soy sauce<br/>
    1/4 C worchestershire sauce<br/>
    2 tbls lemon juice<br/>
    2 tbls brown/spicy mustard<br/>
    2 tsp dried rosemary<br/>
    2 tsp garlic powder<br/>
    1.5 tsp salt<br/>
    1 tsp pepper</Typography>`,
    },
];
