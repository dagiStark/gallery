import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import moment from "moment";
import PropTypes from "prop-types";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia />
      <Box>
        <Typography>{post.creator}</Typography>
        <Typography>{moment(post.createdAt).fromNow()}</Typography>
      </Box>
      <Box>
        <Button>
          <MoreHorizIcon />
        </Button>
      </Box>
      <Box>
        <Typography>{post.tags.map((tag) => `#${tag} `)}</Typography>
      </Box>
      <CardContent>
        <Typography>{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Button>
          <ThumbUpIcon /> Like {post.likeCount}
        </Button>
        <Button>
          <DeleteForeverIcon /> Delete
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
  }).isRequired,
};
