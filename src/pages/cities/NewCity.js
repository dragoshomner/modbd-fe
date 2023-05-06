import React from 'react';
import CityForm from '../../components/forms/CityForm';

export const NewCity = () => {
  const onSubmit = data => console.log('New data', data);
    
  return (
    <>
        <h1>New City</h1>
        <CityForm onSubmit={onSubmit} />
    </>
  );
};
