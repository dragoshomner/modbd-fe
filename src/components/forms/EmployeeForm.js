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
        id="startDate" 
        label="Start Date" 
        type="date"
        hasError={Boolean(errors.startDate)}
        register={register('startDate', {required: true})} />
      <CustomInput 
        id="birthDate" 
        label="Birth Date" 
        type="date"
        hasError={Boolean(errors.birthDate)}
        register={register('birthDate', {required: true})} />
      <CustomInput 
        id="nationality" 
        label="Nationality"
        hasError={Boolean(errors.nationality)}
        register={register('nationality', {required: true})} />
      <CustomInput 
        id="hotelId" 
        label="Hotel ID" 
        type="number"
        hasError={Boolean(errors.hotelId)}
        register={register('hotelId', {required: true})} />
      <CustomInput 
        id="jobId" 
        label="Job ID" 
        type="number"
        hasError={Boolean(errors.jobId )}
        register={register('jobId', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default EmployeeForm;
