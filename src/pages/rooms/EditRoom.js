import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomForm from '../../components/forms/RoomForm';
import { rows } from '../../__mocks__/rooms.mock';

export const EditRoom = () => {
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
        <h1>Edit Room</h1>
        <RoomForm data={data} onSubmit={onSubmit} />
    </>
  );
};
