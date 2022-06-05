import React from "react";
import useStyles from "./styles";
import {Card, CardActions, CardContent, CardMedia,Button, Typography} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/posts";

function Post({post, setCurrentId}) {
  const dispatch = useDispatch();
      
  const classes = useStyles();
  return <Card className={classes.card}>
    <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
    <div className={classes.overlay}>
      <Typography variant="h6">{post.creator}</Typography>
      <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className={classes.overlay2}>
      <Button style={{color:"white"}} size='small' onClick={()=>{
        setCurrentId(post._id);
       }}>
        <MoreHorizIcon fontSize="small" />
      </Button>
    </div>
    <div className={classes.details} >
      <Typography variant="body2" color='textSecondary'>{post.tags.map((tags)=>`#${tags} `)}</Typography>
    </div>
    <CardContent>
    <Typography className={classes.title} variant="h6" gutterBottom>{post.title}</Typography>
    <Typography className={classes.message} variant="body2" color="textSecondary" component ="p" >{post.message}</Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <Button size='small' color="primary" onClick={()=>dispatch(likePost(post._id))}>
        <ThumbUpIcon fontSize="small" />
        &nbsp;Like {post.likeCount}
      </Button>
      <Button size='small' color="primary" onClick={()=>dispatch(deletePost(post._id))}>
        <DeleteIcon fontSize="small" />
        Delete
      </Button>
      </CardActions>
  </Card>;
}

export default Post;
