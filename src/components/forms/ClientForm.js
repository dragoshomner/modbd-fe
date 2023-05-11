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
      premiumGuest: false,
      ...data
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
        id="phoneNumber"
        label="Phone Number"
        hasError={Boolean(errors.phoneNumber)}
        register={register('phoneNumber', {required: true})} />
      <CustomInput 
        id="membershipPoints"
        label="Membership Points" 
        hasError={Boolean(errors.membershipPoints)}
        register={register('membershipPoints', {required: true})} />

      <Controller
        name="premiumGuest"
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
