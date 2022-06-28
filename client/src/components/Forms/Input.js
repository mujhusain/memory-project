import { Grid,TextField } from "@material-ui/core";
import React from "react";

function Input({
  name,
  label,
  type,
  autoFocus,
  onChange,
  half,
  value,
  required,
  multiline,
  rows
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={onChange}
        label={label}
        value={value}
        variant="outlined"
        fullWidth
        autoFocus={autoFocus}
        type={type}
        required={required}
        multiline={multiline}
        rows={rows}
      />
    </Grid>
  );
}

export default Input;
