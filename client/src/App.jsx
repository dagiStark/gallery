import { Container, Typography, AppBar, Grow, Grid2 } from "@mui/material";
import memories from "./assets/memories.png";
import Posts from "./components/posts/Posts.jsx";
import Form from "./components/form/Form.jsx";

import useStyles from "./styles.js";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Gallery
        </Typography>
        <img className={classes.image} src={memories} alt="gallery" height={60} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid2
            container
            justifyContent={"space-between"}
            alignItems={"stretch"}
            spacing={4}
          >
            <Grid2 item="true" size={12}>
              <Posts />
            </Grid2>
            <Grid2 item="true" size={12}>
              <Form />
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
