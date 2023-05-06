import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientForm from '../../components/forms/ClientForm';
import { rows } from '../../__mocks__/clients.mock';

export const EditClient = () => {
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
        <h1>Edit Client</h1>
        <ClientForm data={data} onSubmit={onSubmit} />
    </>
  );
};
