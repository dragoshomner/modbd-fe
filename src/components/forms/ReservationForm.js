import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomInput from './custom/CustomInput';

const ReservationForm = ({data, onSubmit}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: data
  });

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput 
        id="checkInDate" 
        label="Check-In Date"
        type="date"
        hasError={Boolean(errors.checkInDate)}
        register={register('checkInDate', {required: true})} />
      <CustomInput 
        id="checkOutDate" 
        label="Check-Out Date" 
        type="date"
        hasError={Boolean(errors.checkOutDate)}
        register={register('checkOutDate', {required: true})} />
      <CustomInput 
        id="roomId" 
        label="Room Id" 
        type="number"
        hasError={Boolean(errors.roomId)}
        register={register('roomId', {required: true})} />
      <CustomInput 
        id="clientId" 
        label="Client Id" 
        type="number"
        hasError={Boolean(errors.clientId)}
        register={register('clientId', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ReservationForm;
