import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import Navbar from './Navbar';
import Footer from './Footer';
import im7 from '../Images/image7.jpg';
import im8 from '../Images/image8.jpg';

const smallPaperImageStyle = {
  width: '100%',
  height: '80%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};

const Seller2 = () => {
  const navigateToDashboard = () => {
    window.location.href = '/seller/dashboard';
  };

  const navigateToSell = () => {
    window.location.href = '/Sell';
  };

  return (
    <div className="seller2">
      <Navbar />
      
      {/* First Paper */}
      <Card elevation={3} className="paper">
        <Stack direction="row">
          <Stack sx={{ m: 6, width: 500 }}>
            <CardMedia
              sx={{ m: 1, width: 10, height: 50, marginTop: 8 }}
              component="img"
              alt="Land Image 1"
              height="50"
              image={im7}
              style={smallPaperImageStyle}
            />
          </Stack>
          <Stack sx={{ width: 400 }}>
            <CardContent sx={{ width: 600, marginLeft: 10, marginTop: 7 }}>
              <Typography variant="h6" color="textSecondary">
                1.Seller ID
                2.Seller Name
                3.Seller Phone Number
                4.Seller email
                5.Image url
                6.Seller address
              </Typography>
              <Button variant="contained" color="primary" onClick={navigateToDashboard}>
                <AddIcon /> Add
              </Button>
            </CardContent>
          </Stack>
        </Stack>
      </Card>
      
      <Card elevation={3} className="paper">
        <Stack direction="row">
          <Stack sx={{ width: 400 }}>
            <CardContent sx={{ width: 600, marginLeft: 10, marginTop: 7 }}>
              <Typography variant="h6" color="textSecondary">
                Our platform offers a user-friendly experience with a feature-rich system that
                simplifies the process of managing seller data. Through OTP Mail Authentication,
                clients can securely access seller information. Clients provide the seller's ID
                and email address, allowing them to send and verify OTPs. Once verified, clients
                gain access to a dashboard displaying essential details about sellers, including
                their names, contact information, and land-related specifics. Users can conveniently
                edit or delete seller data as needed. Additionally, the platform facilitates the
                addition of new seller data, ensuring all fields are correctly filled. With a
                seamless process and user-friendly interface, our platform empowers clients
                to efficiently manage and update seller information. We are committed to
                providing a hassle-free and effective experience for our valued users.
              </Typography>
              <Button variant="contained" color="primary" onClick={navigateToSell}>
                <VisibilityIcon /> View
              </Button>
            </CardContent>
          </Stack>
          <Stack sx={{ m: 6, width: 500 }}>
            <CardMedia
              sx={{ m: 1, width: 10, height: 50, marginTop: 6, marginLeft: 55 }}
              component="img"
              alt="Land Image 1"
              height="50"
              image={im8}
              style={smallPaperImageStyle}
            />
          </Stack>
        </Stack>
      </Card>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <Footer />
    </div>
  );
};

export default Seller2;
