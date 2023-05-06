import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import CustomInput from './custom/CustomInput';

const RoomForm = ({data, onSubmit}) => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors }, 
    control,
  } = useForm({
    defaultValues: {
      smoking: false,
      ...data
    }
  });

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput 
        id="number" 
        label="Number"
        type="number"
        hasError={Boolean(errors.number)}
        register={register('number', {required: true})} />
      <CustomInput 
        id="floor" 
        label="Floor" 
        type="number"
        hasError={Boolean(errors.floor)}
        register={register('floor', {required: true})} />
      <CustomInput 
        id="description"
        label="Description" 
        hasError={Boolean(errors.description)}
        register={register('description', {required: true})} />
      <CustomInput 
        id="type"
        label="Type" 
        hasError={Boolean(errors.type)}
        register={register('type', {required: true})} />
      <CustomInput 
        id="price"
        label="Price" 
        type="number"
        hasError={Boolean(errors.price)}
        register={register('price', {required: true})} />
      <CustomInput 
        id="hotel_id"
        label="Hotel Id" 
        type="number"
        hasError={Boolean(errors.hotel_id)}
        register={register('hotel_id', {required: true})} />

      <Controller
        name="smoking"
        control={control}
        render={({ field }) => (
          <Box style={{ marginBottom: 10 }}>
            <FormControlLabel
              control={<Checkbox checked={field.value} {...field} />}
              label="Smoking" />
          </Box>
        )}
      />
      {/* <Box>
        <FormControlLabel 
          control={
            <Checkbox
              checked={!!getValues('smoking')}
              onChange={(e) => setValue('smoking', e.target.checked)}
              {...register('smoking')} 
            />} 
          label="Smoking" 
          labelPlacement="start"
          style={{ marginBottom: 10 }}
        />
      </Box> */}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default RoomForm;
