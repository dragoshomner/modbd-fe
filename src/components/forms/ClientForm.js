import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import CustomInput from './custom/CustomInput';

const ClientForm = ({data, onSubmit}) => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors }, 
    control,
  } = useForm({
    defaultValues: {
      premium_guest: false,
      ... data
    }
  });

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput 
        id="name" 
        label="Name"
        hasError={Boolean(errors.name)}
        register={register('name', {required: true})} />
      <CustomInput 
        id="email" 
        label="Email"
        hasError={Boolean(errors.email)}
        register={register('email', {required: true})} />
      <CustomInput 
        id="phone_number"
        label="Phone Number"
        hasError={Boolean(errors.phone_number)}
        register={register('phone_number', {required: true})} />
      <CustomInput 
        id="membership_points"
        label="Membership Points" 
        hasError={Boolean(errors.membership_points)}
        register={register('membership_points', {required: true})} />

      <Controller
        name="premium_guest"
        control={control}
        render={({ field }) => (
          <Box style={{ marginBottom: 10 }}>
            <FormControlLabel
              control={<Checkbox checked={field.value} {...field} />}
              label="Premium Guest" />
          </Box>
        )}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ClientForm;
