import React from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate, useLocation} from "react-router-dom"

function Navbar() {
  const classes = useStyles();
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const location=useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  useEffect(() => {
    // const token = user?.token;
    // jwt
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logOut = (user) =>{
    dispatch({type: "LOGOUT"});
    navigate("/")
    setUser(null);
  }
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h4"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          width="50"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} varient="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logOut}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Signin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
