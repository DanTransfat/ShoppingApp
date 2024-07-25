import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar({ onViewChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          {/* <button onClick={() => onViewChange('home')}>Home</button>
          <button onClick={() => onViewChange('cart')}>Cart</button> */}
          <Button color="inherit" onClick={() => onViewChange('home')}>Home</Button>
          <Button color="inherit" onClick={() => onViewChange('cart')}>Cart</Button>
          {/* <Button color="inherit" component={RouterLink} to="/signup">Shipping</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}