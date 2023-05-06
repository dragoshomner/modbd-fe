import React from 'react';
import AddressForm from '../../components/forms/AddressForm';

export const NewAddress = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New Address</h1>
        <AddressForm onSubmit={onSubmit} />
    </>
  );
};
