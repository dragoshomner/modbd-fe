import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = forwardRef(({hasError, label, register, otherProps}, ref) => (
  <TextField 
    label={label}
    ref={ref}
    variant="outlined" 
    fullWidth
    style={{ marginBottom: 10 }}
    error={hasError}
    helperText={hasError && 'This field is required'}
    InputLabelProps={{ shrink: true }} 
    { ...register}
    { ...otherProps } />
));

CustomInput.displayName = 'CustomInput';

export default CustomInput;