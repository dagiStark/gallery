import { Container, Typography, AppBar, Grow } from "@mui/material";
import Grid from "@mui/material/Grid2";
import memories from "./assets/memories.png";
import Posts from "./components/posts/Posts.jsx";
import Form from "./components/form/Form.jsx";
import { useDispatch } from "react-redux";
import { useState } from "react";
import useStyles from "./styles.js";
import { useEffect } from "react";

import { getPosts } from "./actions/posts.js";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="static"
        color="inherit"
      >
        <Typography className={classes.heading} variant="h2" align="center">
          Gallery
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="gallery"
          height={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Grid size={8} mt={4}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid size={4} mt={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
