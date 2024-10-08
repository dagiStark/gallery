import Post from "./post/Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";

const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
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
              <Post post={post} setCurrentId={setCurrentId}/>
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

Posts.propTypes = {
  setCurrentId: PropTypes.func.isRequired, 
};