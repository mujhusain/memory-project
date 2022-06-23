import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Input({
  name,
  label,
  type,
  autoFocus,
  onChange,
  half,
  handleShowPassword,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={onChange}
        label={label}
        variant="outlined"
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name == "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type == "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
}

export default Input;
