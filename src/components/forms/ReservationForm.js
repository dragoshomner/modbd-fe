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
        id="check_in_date" 
        label="Check-In Date"
        type="date"
        hasError={Boolean(errors.check_in_date)}
        register={register('check_in_date', {required: true})} />
      <CustomInput 
        id="check_out_date" 
        label="Check-Out Date" 
        type="date"
        hasError={Boolean(errors.check_out_date)}
        register={register('check_out_date', {required: true})} />
      <CustomInput 
        id="room_id" 
        label="Room Id" 
        type="number"
        hasError={Boolean(errors.room_id)}
        register={register('room_id', {required: true})} />
      <CustomInput 
        id="client_id" 
        label="Client Id" 
        type="number"
        hasError={Boolean(errors.client_id)}
        register={register('client_id', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ReservationForm;
