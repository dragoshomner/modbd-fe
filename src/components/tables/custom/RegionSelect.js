import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const RegionSelect = () => {
  const [age, setAge] = React.useState('global');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Region</InputLabel>
      <Select
        value={age}
        label="Region"
        onChange={handleChange}
      >
        <MenuItem value="global">Global</MenuItem>
        <MenuItem value="us">US</MenuItem>
        <MenuItem value="ue">UE</MenuItem>
      </Select>
    </FormControl>
  );
};