import React from 'react';
import HotelForm from '../../components/forms/HotelForm';

export const NewHotel = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Hotel</h1>
        <HotelForm onSubmit={onSubmit} />
    </>
  );
};
