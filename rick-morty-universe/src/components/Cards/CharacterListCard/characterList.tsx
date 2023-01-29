/* eslint-disable prettier/prettier */
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

export default function CharacterList() {

    const useStyles = makeStyles((theme) => ({
        root: {
        //   height: '100vh',
        //   backgroundColor: 'red',
          margin: theme.spacing(20),
        },
      }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container>
          <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
            <Typography variant="h6">
              Rick and Morty
            </Typography>
            <Button color="inherit">Login</Button>
          </Grid>
        </Grid>
      </div>
    );
  }