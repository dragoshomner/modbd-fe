import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomInput from './custom/CustomInput';

const AddressForm = ({data, onSubmit}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: data
  });

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput 
        id="street" 
        label="Street"
        hasError={Boolean(errors.street)}
        register={register('street', {required: true})} />
      <CustomInput 
        id="addressNumber" 
        label="Number"  
        type="number"
        hasError={Boolean(errors.addressNumber)}
        register={register('addressNumber', {required: true})} />
      <CustomInput 
        id="postalCode" 
        label="Postal Code"
        hasError={Boolean(errors.postalCode)}
        register={register('postalCode', {required: true})} />
      <CustomInput 
        id="notes" 
        label="Notes"
        hasError={Boolean(errors.notes)}
        register={register('notes', {required: true})} />
      <CustomInput 
        id="cityId" 
        label="City Id"
        type="number"
        hasError={Boolean(errors.cityId)}
        register={register('cityId', {required: true})} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default AddressForm;
