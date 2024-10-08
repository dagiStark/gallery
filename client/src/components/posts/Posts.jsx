import Post from "./post/Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <>
      {" "}
      {posts.length ? (
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          container
          alignItems={"stretch"}
          spacing={4}
        >
          {posts.map((post) => (
            <Grid key={post._id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Posts;
