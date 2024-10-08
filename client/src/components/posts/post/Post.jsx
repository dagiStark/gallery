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

const Post = ({ post }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
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
          color: "white",
        }}
      >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: "white",
        }}
      >
        <Button style={{ color: "white" }} size="small">
          <MoreHorizIcon fontSize="default" />
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
        <Button size="small" color="primary">
          <ThumbUpIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button>
          <DeleteForeverIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    creator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    selectedFile: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
