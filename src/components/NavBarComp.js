import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ onViewChange }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add your sign-out logic here, such as clearing user session data
    // For example, you might clear localStorage or cookies
    // localStorage.removeItem('user');
    // Cookies.remove('session');

    // Redirect to home page
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Add your application title or logo here */}
          </Typography>
          <Button color="inherit" onClick={() => onViewChange('home')}>Home</Button>
          <Button color="inherit" onClick={() => onViewChange('cart')}>Cart</Button>
          {/* Add other navigation buttons here */}
          <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}