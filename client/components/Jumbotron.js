import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  bannerImage: {
    padding: 0,
    margin: 0,
    height: '300px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap'
  }
}));

const Jumbotron = ({
  backgroundImage,
  title,
  subtitle,
  textColor = 'white'
}) => {
  const classes = useStyles();

  const styles = {
    color: textColor,
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ' +
      backgroundImage,
    backgroundSize: 'cover'
  };

  return (
    <Grid
      item
      xs={12}
      id="jumbotron-banner"
      className={classes.bannerImage}
      style={styles}
    >
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </Grid>
  );
};

export default Jumbotron;
