import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomInput from './CustomInput';

const HotelForm = ({data, onSubmit}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: data
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
        id="description" 
        label="Description" 
        hasError={Boolean(errors.description)}
        register={register('description', {required: true})} />
      <CustomInput 
        id="rating" 
        type="number"
        label="Rating" 
        hasError={Boolean(errors.rating)}
        register={register('rating', {required: true})} />
      <CustomInput 
        id="address_id" 
        label="Address Id" 
        type="number"
        hasError={Boolean(errors.address_id)}
        register={register('address_id', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default HotelForm;
