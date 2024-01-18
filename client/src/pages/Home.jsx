import TourCard from '../components/Tourcard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import { Typography } from '@mui/material';

const Home = () => (
    <>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <div key={city.id}>
            <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
             {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
            </Grid>
          </div>
        ))}

      </Container>
    </>
)

export default Home;