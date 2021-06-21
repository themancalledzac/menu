import { Button, Grid } from '@material-ui/core';
import CustomCard from '../components/Card';
import Jumbotron from '../components/Jumbotron';

const Home = () => {
  return (
    <main>
      <Grid container>
        <Jumbotron
          backgroundImage="./images/restaurant.jpg"
          title="Menu is a online restaurant management system."
          subtitle="Letting you provide the ingredients and the customer the recipe."
        >
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Jumbotron>
        <br />
        <Grid item>
          <h1>How it works</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            debitis saepe et ex asperiores voluptatum molestiae beatae nobis
            nesciunt iste.
          </p>
        </Grid>
        <Grid container style={{ gap: '1em', justifyContent: 'center' }}>
          <Grid item xs={3}>
            <CustomCard></CustomCard>
          </Grid>
          <Grid item xs={3}>
            <CustomCard></CustomCard>
          </Grid>
          <Grid item xs={3}>
            <CustomCard></CustomCard>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
