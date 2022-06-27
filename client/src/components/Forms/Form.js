import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Typography, Paper, Button, Grid } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import Input from "./Input";

function Form({ currentId, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleChange = (event) => {
    setPostData({ ...postData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId===0) {
      console.log(user.result.name)
      dispatch(updatePost(currentId, { ...postData, name: user.result.name }));
    } else {
      dispatch(createPost({ ...postData, name: user.result.name }));
    }
    clearForm();
  };

  const clearForm = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (user===null) {
    return (
      <Paper className={classes.paper}>
        <p>
          Please LogIn first to create your memories and to like others memories.
        </p>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} Memory
        </Typography>
        <Grid container spacing={1}>
          <Input
            name="title"
            label="Title"
            value={postData.title}
            onChange={handleChange}
            required={true}
          />
          <Input
            name="message"
            label="Message"
            value={postData.message}
            onChange={handleChange}
            multiline
            rows={4}
          />

          <Input
            name="tags"
            label="Tags (Space Separated) "
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
          <Button
            onClick={clearForm}
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
          >
            Clear
          </Button>
        </Grid>
      </form>
    </Paper>
  );
}

export default Form;
