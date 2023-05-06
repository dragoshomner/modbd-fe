import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomInput from './custom/CustomInput';

const EmployeeForm = ({data, onSubmit}) => {
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
        id="address" 
        label="Address"
        hasError={Boolean(errors.address)}
        register={register('address', {required: true})} />
      <CustomInput 
        id="start_date" 
        label="Start Date" 
        type="date"
        hasError={Boolean(errors.start_date)}
        register={register('start_date', {required: true})} />
      <CustomInput 
        id="birth_date" 
        label="Birth Date" 
        type="date"
        hasError={Boolean(errors.birth_date)}
        register={register('birth_date', {required: true})} />
      <CustomInput 
        id="nationality" 
        label="Nationality"
        hasError={Boolean(errors.nationality)}
        register={register('nationality', {required: true})} />
      <CustomInput 
        id="hotel_id" 
        label="Hotel ID" 
        type="number"
        hasError={Boolean(errors.hotel_id)}
        register={register('hotel_id', {required: true})} />
      <CustomInput 
        id="job_id" 
        label="Job ID" 
        type="number"
        hasError={Boolean(errors.job_id )}
        register={register('job_id', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default EmployeeForm;
