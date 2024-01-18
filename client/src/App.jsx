
import './App.css';
import TourCard from './components/Tourcard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";


function App() {


  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </>
  )
}

export default App
