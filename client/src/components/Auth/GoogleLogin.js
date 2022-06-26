import React from "react";
import GoogleIcon from "./GoogleIcon";
import { useGoogleLogin } from "react-google-login";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

function GoogleLogin() {
  const classes = useStyles();


  const onSuccess = async (res) => {
    console.log(res);
  };
  const onFailure = (err) => {
      console.log("Google Login Failed");
    console.error(err);
  };

  const clientId =
    "243525404809-vrgda1slm54517f3ckotbehrlm9o4ndg.apps.googleusercontent.com";
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  return (
    <Button
      className={classes.googleButton}
      color="primary"
      fullWidth
      onClick={signIn}
      startIcon={<GoogleIcon />}
      variant="contained"
    >
      Google Sign In
    </Button>
  );
}

export default GoogleLogin;
