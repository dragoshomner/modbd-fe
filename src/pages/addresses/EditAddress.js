import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddressForm from '../../components/forms/AddressForm';
import { rows } from '../../__mocks__/addresses.mock';

export const EditAddress = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    const myDataRaw = rows.find(row => row.id === Number(params.id));
    // eslint-disable-next-line no-unused-vars
    const { id, ...myData } = myDataRaw;
    setData(myData);
  }, []);
    
  const onSubmit = data => console.log('Edit data', data);
    
  return (
    <>
        <h1>Edit Address</h1>
        <AddressForm data={data} onSubmit={onSubmit} />
    </>
  );
};
