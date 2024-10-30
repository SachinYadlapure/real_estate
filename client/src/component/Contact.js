import React from 'react';
import Navbar from './Navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';

const Contact = () => {
  const pageStyle = {
    backgroundColor: '#00008B',
  };

  const paperStyle = {
    backgroundColor: 'white',   
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    width: '70%',
    color: 'black',
    textAlign: 'left',
    
  };

  const contactInfoStyle = {
    width: '30%',
    padding: '20px',
  };

  const contactTitleStyle = {
    fontWeight: 'bold',
  };

  const submitButtonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <Paper
        elevation={12}
        sx={{
          width: '90%',
          borderRadius: '10px',
          margin: 'auto',
       
        }}
      >
        <div style={paperStyle}>
          <div style={sectionStyle} align='justify'>
            <h1>GET IN TOUCH</h1>
            <p>
              Enter your contact information below, and we'll get back to you as soon as we can.
            </p>
            <form>
              <div>
                <TextField label="Full Name" variant="outlined" fullWidth />
              </div>
              <br></br>
              <div>
                <TextField label="Email" variant="outlined" fullWidth />
              </div>
              <br></br>
              <div>
                <TextField label="Phone Number" variant="outlined" fullWidth />
              </div>
              <br></br>
              <div>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                />
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  By providing your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications. This consent isn’t necessary for purchasing any products or services, and you may opt out at any time. To opt out from texts, you can reply ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                </label>
              </div>
              <br></br>
              <div>
                <Button variant='contained' sx={{ width: '300px', right: '-360px' }}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <div style={contactInfoStyle}>
            <h2 style={contactTitleStyle}>Imperial properties</h2>
            <p>+91 7899483492</p>
            
            
            <p>bindu6211@gmail.com</p>
            <p>ADDRESS</p>
            <p>CIMS</p>
            <p>Jayanagar, Bangalore</p>
         
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Contact;
