import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
// import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import TechSledPic from '../assets/TechSled.svg';
import CoatRack from '../assets/WS-Coat-Rack.svg';
import ShoeBench from '../assets/WS-Shoe-Bench.svg';
import Desk from '../assets/WS-Desk.svg';
//kitchen images
import SalsaPic from '../assets/kitchen/salsa.svg';
import GuacPic from '../assets/kitchen/guac-square.png';
import BBQChickenMarinade from '../assets/kitchen/marinaded-chicken.png';

//========================================
// * Don' forget this
// ! it will hurt....
// TODO: clean up the unused code
//   if you use 3 spaces you get YELLOW
//+++++++++++++++++++++++++++++++++++++++++

const useStyles = makeStyles((theme) => ({
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
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function LandingPage(props) {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

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
        <div className={classes.mainContainer}>
            <Grid item className={classes.breadcrumbsContainer}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link underline='hover' color='inherit' href='/'>
                        Main
                    </Link>
                    <Typography color='text.primary'>Hobbies</Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item className={classes.hobbyBlock}>
                <Typography variant='body1' className={classes.basicParagraph}>
                    There are times of hard work, but there also has to be a
                    balance of difference. The moments of just escaping from the
                    moment into a healthy interaction. Not to waste time, but
                    also to get some sense of acheivement and accomplishment.
                    These are a few of my favorite things...
                </Typography>
            </Grid>
            <Grid item className={classes.hobbyBlock}>
                {/*-----Woodshop Block-----*/}
                <Typography
                    variant='h2'
                    id='woodshop'
                    className={classes.centeredTitle}
                >
                    Woodworking
                </Typography>
            </Grid>
            <Grid item className={classes.hobbyBlock}>
                <Typography className={classes.basicParagraph}>
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
            <Grid item className={classes.hobbyBlock}>
                <img
                    className={classes.woodPic}
                    alt='Tech Sled'
                    src={TechSledPic}
                />
            </Grid>
            <Grid className={classes.woodGalleryContainer}>
                <ImageList className={classes.woodGaleryList}>
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

            <Grid item className={classes.hobbyBlock}>
                {/*-----Kitchen Block-----*/}
                <Typography variant='h2' className={classes.centeredTitle}>
                    Kitchen
                </Typography>
            </Grid>
            <Grid item className={classes.hobbyBlock}>
                <Typography className={classes.basicParagraph}>
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
            <Grid className={classes.recipeContainer}>
                {recipes.map((recipe) => (
                    <Card className={classes.recipeCard}>
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
                        <img
                            src={recipe.picture}
                            alt='salsa'
                            className={classes.recipePic}
                        />

                        <CardContent>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: recipe.overview,
                                }}
                            ></div>
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
                                ></div>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </Grid>
        </div>
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
        description: `<Typography className={classes.sectionParagraph}>
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
        overview: `<Typography className={classes.sectionParagraph}>Avacados with a flavorful kick.</Typography>`,
        description: `<Typography className={classes.sectionParagraph}>
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
        overview: `<Typography className={classes.sectionParagraph}>A delicious new marinade that we tried and immediately everyone said, "It's a keeper", Enjoy!!</Typography>`,
        description: `<Typography className={classes.sectionParagraph}>
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
