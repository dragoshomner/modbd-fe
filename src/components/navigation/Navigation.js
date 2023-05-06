import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { 
  EMPLOYEES_TAB, 
  HOTELS_TAB, 
  JOBS_TAB, 
  ROOMS_TAB,
  RESERVATIONS_TAB,
  CLIENTS_TAB,
  ADDRESSES_TAB,
  CITIES_TAB,
  COUNTRIES_TAB,
  currentTab 
} from './tabs';
  
export function Navigation() {
  const [value, setValue] = React.useState(currentTab);
  
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Box sx={{ width: '100%' }} mb={2}>
        <Tabs value={value} onChange={handleChange}>
          <LinkTab label="Hotels" to={`/${HOTELS_TAB}`} />
          <LinkTab label="Employees" to={`/${EMPLOYEES_TAB}`} />
          <LinkTab label="Jobs" to={`/${JOBS_TAB}`} />
          <LinkTab label="Rooms" to={`/${ROOMS_TAB}`} />
          <LinkTab label="Reservations" to={`/${RESERVATIONS_TAB}`} />
          <LinkTab label="Clients" to={`/${CLIENTS_TAB}`} />
          <LinkTab label="Addresses" to={`/${ADDRESSES_TAB}`} />
          <LinkTab label="Cities" to={`/${CITIES_TAB}`} />
          <LinkTab label="Countries" to={`/${COUNTRIES_TAB}`} />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}