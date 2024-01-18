// This wont be dynamic, bc video guy didnt wanna spend time on that

import { Accordion, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";


const Tour = () =>
    <Container sx={{ width: 900 }}>

        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the world in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }} >
            <img src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" alt="picture" height={325} />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, tenetur. Debitis, magnam doloribus vero ipsa eius expedita, corporis quod sequi voluptatibus aliquam iure laboriosam recusandae nobis. Expedita suscipit sunt eligendi?
            </Typography>
        </Box>
        <Box marginBottom={8}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                FAQ
            </Typography>
            <CustomizedAccordions />
        </Box>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels>
              <BasicModal />
            </BottomNavigation>
        </Paper>

    </Container>;

export default Tour;

