import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import JSA from "../Images/logo.png";

const logoStyles = {
  width: '50px',
  height: '50px',
  marginRight: '10px',
  borderRadius: '50%',
};

const usernameStyles = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginRight: '10px',
};

export default function Navbar() {
  const navigate = useNavigate();

  // Get the username from localStorage
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    // Clear the username and destroy the session
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <AppBar>
      <Toolbar>
        <Box display="flex" alignItems="center">
          {/* <img src={JSA} alt="Logo" styles={logoStyles} width={30} height={30} style={{ marginRight: '10px' }} /> */}
          <Typography variant="h6">
            Imperial properties
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" to="/homepage" component={Link}>
            <HomeTwoToneIcon />
          </Button>
          <Button color="inherit" to="/Seller" component={Link}>
            Sell
          </Button>
          <Button color="inherit" to="/Buy" component={Link}>
            Buy
          </Button>
          {/* <Button color="inherit" to="/map" component={Link}>
            <MyLocationIcon/>maps
          </Button> */}
          <Button color="inherit" to="/AboutUs" component={Link}>
            About Us
          </Button>
          <Button color="inherit" to= "/Contact" component={Link}>
            Contact Us
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body1" style={usernameStyles}>
          {username ? `Welcome, ${username}` : ''}
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout <LogoutIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
