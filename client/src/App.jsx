
import './App.css';
import SearchAppBar from './components/AppBar';
import TourCard from './components/Tourcard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";


function App() {


  return (
    <>
    <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
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
