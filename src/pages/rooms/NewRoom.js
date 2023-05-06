import React from 'react';
import RoomForm from '../../components/forms/RoomForm';

export const NewRoom = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Room</h1>
        <RoomForm onSubmit={onSubmit} />
    </>
  );
};
