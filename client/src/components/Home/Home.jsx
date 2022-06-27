import React, { useState,useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Forms/Form";
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts'
import Pagination from '../Pagination';
import useStyles from './styles'

function Home() {
    const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);

  return (
    <Grow in>
        <Container>
          <Grid className={classes.gridContainer} container justifyContent="space-between">
            <Grid item xs={12} sm={7}>
              <Posts currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper className={classes.pagination} elevation={6}>
                <Pagination />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home