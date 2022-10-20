import React from 'react';
import { TextField } from '@mui/material';

function TextInput({ id, formik }) {
  return (
    <TextField
      id={id}
      className="form-input"
      required
      fullWidth
      value={formik.values[id]}
      label={`${id.charAt(0).toUpperCase() + id.slice(1)}`}
      variant="outlined"
      type={id === 'password' ? 'password' : 'text'}
      margin="dense"
      onChange={formik.handleChange}
      error={formik.touched[id] && Boolean(formik.errors[id])}
      helperText={formik.touched[id] && formik.errors[id]}
    />
  );
}

export default TextInput;
