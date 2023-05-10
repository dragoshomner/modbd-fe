import React, { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { RegionContext } from '../../../data/context/RegionProvider';

export const RegionSelect = () => {
  const { region, changeRegion } = useContext(RegionContext);

  const handleChange = (event) => {
    changeRegion(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Region</InputLabel>
      <Select
        value={region}
        label="Region"
        onChange={handleChange}
      >
        <MenuItem value="global">Global</MenuItem>
        <MenuItem value="am">AM</MenuItem>
        <MenuItem value="eu">EU</MenuItem>
      </Select>
    </FormControl>
  );
};