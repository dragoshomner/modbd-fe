import React from 'react';
import ReservationForm from '../../components/forms/ReservationForm';

export const NewReservation = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Reservation</h1>
        <ReservationForm onSubmit={onSubmit} />
    </>
  );
};
