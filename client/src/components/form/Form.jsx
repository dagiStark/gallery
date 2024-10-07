import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useState } from "react";
import useStyles from "./styles.js";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectFile: "",
  });

  const classes = useStyles();

  const handleSubmit = () => {};
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        action=""
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onChange={({ base64 }) =>
              setPostData({ ...postData, selectFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          color="primary"
          type="submit"
          fullWidth
          variant="contained"
          size="large"
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          color="primary"
          fullWidth
          variant="contained"
          size="small"
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
