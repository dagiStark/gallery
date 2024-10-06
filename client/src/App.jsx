import { Container, Typography, AppBar, Grow, Grid2 } from "@mui/material";
import memories from "./assets/memories.png";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Gallery
        </Typography>
        <img src={memories} alt="gallery" height={60} width={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid2
            container
            justifyContent={"space-between"}
            alignItems={"stretch"}
            spacing={4}
          >
            <Grid2 item size={12}>
              <Posts />
            </Grid2>
            <Grid2 item size={12}>
              <Form />
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
