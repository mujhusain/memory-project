import React, { useState,useEffect } from "react";
import useStyles from "./styles";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


function Form({currentId, setCurrentId}) {
  const classes = useStyles();
const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post=useSelector(state=>currentId?state.posts.find(post=>post._id===currentId):null);

  useEffect(() => {
    if (post) {
      setPostData(post);
    }},[post]);

  const handleChange = (event) => {
        setPostData({ ...postData, [event.target.name]: event.target.value });
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData));
    }else{
      dispatch(createPost(postData));
    }
    clearForm();
  };

  const clearForm=()=>{
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  }

  return (
    <Paper className={`${classes.paper}, ${classes.root}`}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId?'Editing':'Creating'} Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
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
