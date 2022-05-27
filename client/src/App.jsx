import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Form";
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from './actions/posts';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" width="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
