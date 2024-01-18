import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
// acts as a div, wrapper for all other elements we want
import Box from '@mui/material/Box';

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className="img" src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Box paddingX={1}>
                    {/* variant is how this will look; component this will be the h2 element */}
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the Scenery
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                  
                </Box>
            </Paper>

        </Grid>
    )
};

export default TourCard;