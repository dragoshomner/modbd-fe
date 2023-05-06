import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { EMPLOYEES_TAB, HOTELS_TAB, currentTab } from './tabs';
  
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