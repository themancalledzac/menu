import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Jumbotron from '../components/Jumbotron';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  bannerImage: {
    backgroundImage: "url('./images/restaurant.jpg')",
    height: '600px'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <main>
      <Grid container>
        <Jumbotron
          backgroundImage="url(./images/restaurant.jpg)"
          title="Menu is a online restaurant management system."
          subtitle="Build your system and have customer build their own items with your
        ingredients or have them pick for your Menu."
        />
      </Grid>
    </main>
  );
};

export default Home;
