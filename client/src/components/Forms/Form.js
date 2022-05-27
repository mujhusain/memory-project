import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import FileBase from "react-file-base64";

function Form() {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creater: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
  };

  const clearForm=()=>{}

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Create Memory</Typography>
        <TextField
          name="creater"
          variant="outlined"
          label="Creater"
          fullWidth
          value={postData.creater}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.buttonSubmit}
          value="submit"
          size="large"
          fullWidth
        >
          Submit
        </Button>
        <hr></hr>
        <Button
          onClick={clearForm}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
