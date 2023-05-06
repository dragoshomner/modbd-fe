import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RegionSelect } from './RegionSelect';

export const ListHeader = ({ createLinkEntity }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6}>
          <Button 
            variant="contained" 
            component={Link}
            to={`/${createLinkEntity}/new`} 
            style={{marginBottom: 10}}>
                Create
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <RegionSelect />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};