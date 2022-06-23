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

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const state = null;
  const isSignup = false;
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
                  name="firtname"
                  label="First Name"
                  handlChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastname"
                  label="Last Name"
                  handlChange={handleChange}
                  half
                />
              </>
            )}
            <Input name="email" label="Email Id" handlChange={handleChange} />
            <Input
              name="password"
              label="Password"
              handlChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
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
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
