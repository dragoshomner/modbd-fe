import React from 'react';
import { CountriesTable } from '../../components/tables/CountriesTable';
import { rows } from '../../__mocks__/countries.mock';
import { ListHeader } from '../../components/tables/custom/ListHeader';

export const CountriesList = () => {
  return (
    <>
      <ListHeader createLinkEntity="countries" />
      <CountriesTable rows={rows} />
    </>
  );
};