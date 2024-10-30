import React from 'react';
import Navbar from './Navbar';
import Foter from '../component/Footer1';
import { Stack, Card, Typography, Paper } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import hm1 from '../Images/Home1jpg.jpg';
import hm2 from '../Images/home2.jpg';
import hm3 from '../Images/home4.jpg';
import hm4 from '../Images/image1.jpg'; // Add more images
import hm5 from '../Images/image2.jpg';
 // Add more images

import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(255, 255, 255, 0.7)',
  padding: '30px 60px',
  borderRadius: '8px',
};

const textOverlayStyle = {
  textAlign: 'center',
};

const searchInputStyle = {
  width: '100%',
  marginBottom: '10px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const smallPaperStyle = {
  width: '150px',
  height: '200px',
  border: '2px solid transparent',
  margin: '10px',
  borderRadius: '15px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'border-color 0.3s ease',
};

const smallPaperImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};

const smallPaperHoverStyle = {
  transform: 'scale(1.1)',
};

const homepageStyle = {
  background: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const propertyInfoStyle = {
  textAlign: 'center',
  marginTop: '10px',
};

const propertyDetailsStyle = {
  marginTop: '10px',
};
const headingStyle = {
  fontSize: '2rem',
  marginBottom: '10px',
};

const subtitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
};

const searchContainerStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const searchButtonStyle = {
  marginTop: '10px',
};

function Homepage() {
  const handleMouseEnter = (event) => {
    event.target.style.borderColor = 'red';
    event.target.parentElement.style.zIndex = '1';
    event.target.style.zIndex = '2';
    event.target.style.transition = 'transform 0.3s ease';
    event.target.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (event) => {
    event.target.style.borderColor = 'transparent';
    event.target.parentElement.style.zIndex = '0';
    event.target.style.zIndex = '0';
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div style={homepageStyle}>
      <Navbar />
      <Card>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          <div>
            <img src={hm1} alt="Image 1" />
            <p className="legend" style={textOverlayStyle}>
              Real estate is a valuable investment: Houses and properties tend to appreciate in value over time, making them a popular choice for long-term investments. Real estate can provide a stable and potentially lucrative return on investment.
            </p>
          </div>
          <div>
            <img src={hm2} alt="Image 2" />
            <p className="legend" style={textOverlayStyle}>
              Location is a critical factor: The value of a property is significantly influenced by its location. Proximity to amenities, schools, public transportation, and the overall neighborhood can greatly impact property values. "Location, location, location" is a well-known mantra in real estate.
            </p>
          </div>
          <div>
            <img src={hm3} alt="Image 3" />
            <p className="legend" style={textOverlayStyle}>
              Diverse property types cater to various needs: The real estate market offers a wide range of property types, from single-family homes to condominiums, commercial spaces, and more. This diversity allows buyers to find properties that suit their specific needs and preferences, whether it's for residential living or investment purposes.
            </p>
          </div>
          <div>
            <img src={hm4} alt="Image 4" />
            <p className="legend" style={textOverlayStyle}>
            Real estate websites provide a convenient platform for buyers, sellers, and agents to access comprehensive property listings, offering detailed information about homes, apartments, commercial spaces, and more, helping users make informed decisions.
            </p>
          </div>
          <div>
            <img src={hm5} alt="Image 5" />
            <p className="legend" style={textOverlayStyle}>
            These websites often incorporate advanced search and filtering features, virtual property tours, and interactive maps to enhance the user experience, making it easier to explore properties and connect with real estate professionals, ultimately streamlining the real estate transaction process.
            </p>
          </div>
        </Carousel>
      </Card>

      <Stack>
        <center>
          <i>
            <b>
              <h1>Our New Properties</h1>
            </b>
          </i>
        </center>
        <Stack direction="row">
          {/* You can add links to the property details pages here */}
          <Link to="/Buy">
            <Paper
              elevation={20}
              sx={{ ...smallPaperStyle }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={hm1} alt="Image 1" style={{ ...smallPaperImageStyle }} />
              <div style={propertyInfoStyle}>
                <Typography variant="subtitle2">Property Type: Villa</Typography>
                <Typography variant="subtitle2">Cost: $500,000</Typography>
                <Typography variant="subtitle2">Location: New York</Typography>
              </div>
            </Paper>
          </Link>
          <Link to="/Buy">
            <Paper
              elevation={20}
              sx={{ ...smallPaperStyle }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={hm2} alt="Image 2" style={{ ...smallPaperImageStyle }} />
              <div style={propertyInfoStyle}>
                <Typography variant="subtitle2">Property Type: Villa</Typography>
                <Typography variant="subtitle2">Cost: $500,000</Typography>
                <Typography variant="subtitle2">Location: New York</Typography>
              </div>
            </Paper>
          </Link>
          <Link to="/Buy">
            <Paper
              elevation={20}
              sx={{ ...smallPaperStyle }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={hm3} alt="Image 3" style={{ ...smallPaperImageStyle }} />
              <div style={propertyInfoStyle}>
                <Typography variant="subtitle2">Property Type: Villa</Typography>
                <Typography variant="subtitle2">Cost: $500,000</Typography>
                <Typography variant="subtitle2">Location: New York</Typography>
              </div>
            </Paper>
          </Link>
          <Link to="/Buy">
            <Paper
              elevation={20}
              sx={{ ...smallPaperStyle }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={hm4} alt="Image 4" style={{ ...smallPaperImageStyle }} />
              <div style={propertyInfoStyle}>
                <Typography variant="subtitle2">Property Type: Your Type</Typography>
                <Typography variant="subtitle2">Cost: $Your Price</Typography>
                <Typography variant="subtitle2">Location: Your Location</Typography>
              </div>
            </Paper>
          </Link>
          <Link to="/Buy">
            <Paper
              elevation={20}
              sx={{ ...smallPaperStyle }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={hm5} alt="Image 5" style={{ ...smallPaperImageStyle }} />
              <div style={propertyInfoStyle}>
                <Typography variant="subtitle2">Property Type: Your Type</Typography>
                <Typography variant="subtitle2">Cost: $Your Price</Typography>
                <Typography variant="subtitle2">Location: Your Location</Typography>
              </div>
            </Paper>
          </Link>
        </Stack>
      </Stack>
      <Foter />
    </div>
  );
}

export default Homepage;
