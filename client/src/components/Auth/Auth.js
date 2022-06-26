import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";
import useStyles from "./styles";
import LockOutLinedIcon from "@material-ui/icons/LockOpenOutlined";
import Input from "./Input";
import GoogleLogin from "./GoogleLogin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {signin,signup} from "../../actions/auth"

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Auth() {
  const classes = useStyles();
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const [formData, setFormData] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isSignup) {
      dispatch(signup(formData,navigate));
    }else{
      dispatch(signin(formData,navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  
    const switchMode = () => {
    setisSignup((isSignup) => !isSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <hr></hr>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  onChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  onChange={handleChange}
                  half
                />
              </>
            )}
            <Input name="email" label="Email Id" onChange={handleChange} />
            <Input
              name="password"
              label="Password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                onChange={handleChange}
                type="password"
              />
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </Button>
            </Grid>

            <Grid item xs={12}>
              <GoogleLogin />
            </Grid>

            <Grid justify="center" container>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account! Click to Sign In"
                  : "Account not Exists! Click to Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
