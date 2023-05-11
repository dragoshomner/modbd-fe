import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomInput from './custom/CustomInput';

const CityForm = ({data, onSubmit}) => {
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
        id="countryId" 
        label="Country Id" 
        type="number"
        hasError={Boolean(errors.countryId)}
        register={register('countryId', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default CityForm;
