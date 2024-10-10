import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moment from "moment";
import PropTypes from "prop-types";
import { deletePost, likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
        borderTopLeftRadius: "25%",
        borderBottomRightRadius: "25%",
        width: "250px",
      }}
    >
      <CardMedia
        image={post.selectedFile}
        title={post.title}
        alt={post.title}
        sx={{
          height: 0,
          paddingTop: "56.25%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          color: "white",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {post.creator}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#ddd", // lighter text color for date
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "10px",
          color: "white",
        }}
      >
        <Button
          style={{ color: "white", }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="body2" color="textSecondary" component={"h2"}>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Box>
      <Typography
        sx={{
          padding: "0 16px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
        gutterBottom
        variant="h5"
        component={"h2"}
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component={"p"}>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to right, #00b4ff 0%, #0d0d12 100%)",
            color: "white",
            padding: "5px 10px",
          }}
        >
          <ThumbUpIcon fontSize="small" sx={{ marginRight: "8px" }} />{" "}
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to right, #ff5f5f 0%, #ff3f3f 100%)",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            "&:hover": {
              background: "linear-gradient(to right, #ff4b4b 0%, #ff1f1f 100%)",
            },
            fontWeight: "bold",
          }}
        >
          <DeleteForeverIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    selectedFile: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  setCurrentId: PropTypes.func.isRequired,
};
