import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
// acts as a div, wrapper for all other elements we want
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// Customizing styles
// To make this actually work, wrap the component desired with ThemeProvider
const theme = createTheme({
    // where customiza style
    // specify which component you want to customize
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        // This is saying that if we supply a body2 variant, the style (after comma) will be...
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                        // backgroundColor: 'teal'
                        // ^can add more styles
                    }
                },
                {
                    props: {
                        // This is saying that if we supply a body2 variant, the style (after comma) will be...
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
});

const TourCard = ({tour}) => {
    return (
        <Grid item xs={3}>
            {/* theme in curlies is the variable */}
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img className="img" src={tour.image} />
                    <Box paddingX={1}>
                        {/* variant is how this will look; component this will be the h2 element */}
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                            marginTop={3}
                        >
                            <Rating name="read-only" value={tour.rating} precision={0.5} size="small" readOnly />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                From ${tour.price}
                            </Typography>
                        </Box>
                    </Box>

                </Paper>
            </ThemeProvider>

        </Grid>
    )
};

export default TourCard;