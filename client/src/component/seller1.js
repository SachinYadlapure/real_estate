import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Stack, MenuItem,Paper, Select, Typography} from '@mui/material';
import NavBarDesign from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function User() {
  const navigate = useNavigate();

  const [newSeller, setNewSeller] = useState({
    sellerid: '',
    sellername: '',
    sellerphno: '',
    selleremail: '',
    imgurl:'',
    selleraddress: '',
    landarea: '',
    landaddress: '',
    landcost: '',
    producttype:''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSeller({
      ...newSeller,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Check if any field is empty
    for (const key in newSeller) {
      if (newSeller[key] === '') {
        toast.error('Please fill in all fields.');
        return;  // Stop the function if any field is empty
      }
    }

    // All fields are filled, proceed to submit
    axios.post('http://localhost:5000/api/seller', newSeller)
      
      .then((res) => {
        console.log('Data posted successfully:', res.data);
        toast.success('Seller added successfully!');
        setNewSeller({
          sellerid: '',
          sellername: '',
          sellerphno: '',
          selleremail: '',
          imgurl:'',
          selleraddress: '',
          landarea: '',
          landaddress: '',
          landcost: '',
          propertytype:''
        });
        navigate('/Sell');
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <Stack direction="column">
      <NavBarDesign />
      <Stack sx={{ m: 10, width: 1300, marginLeft: 60 }}>
        <Paper elevation={8} sx={{ width: '60%', p: 4, borderRadius: 2, textAlign: 'center', marginRight: 15 }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField
              label="Seller ID"
              name="sellerid"
              value={newSeller.sellerid}
              onChange={handleInputChange}
            />
            <TextField
              label="Seller Name"
              name="sellername"
              value={newSeller.sellername}
              onChange={handleInputChange}
            />
            <TextField
              label="Seller Phone Number"
              variant="outlined" required fullWidth
              name="sellerphno"
              value={newSeller.sellerphno}
              onChange={handleInputChange}
            />
            <TextField
              label="Seller Email"
              variant="outlined" required fullWidth
              name="selleremail"
              value={newSeller.selleremail}
              onChange={handleInputChange}
            />
             <TextField
               label="image url"
                variant="outlined"
                name="imgurl"
                value={newSeller.imgurl}
                onChange={handleInputChange}
           />
            <TextField
              label="Seller Address"
              variant="outlined" required fullWidth
              name="selleraddress"
              value={newSeller.selleraddress}
              onChange={handleInputChange}
            />
             <div style={{ display: 'flex', alignItems: 'center' }}>
  <Typography align='left' style={{ marginRight: '10px' }}>Property Type</Typography>
  <Select
    value={newSeller.producttype}
    name="producttype"
    onChange={handleInputChange}
    sx={{ width: '200px', marginBottom: '10px' }}
    variant="outlined"
    required
    fullWidth
  >
    <MenuItem value="choose here!"></MenuItem>
    <MenuItem value="Villa">Villa</MenuItem>
    <MenuItem value="Bungalow">Bungalow</MenuItem>
    <MenuItem value="Flat">Flat</MenuItem>
    <MenuItem value="Field">Field</MenuItem>
    <MenuItem value="House Land">House Land</MenuItem>
    <MenuItem value="Farm House">Farm House</MenuItem>
    <MenuItem value="Apartment">Apartment</MenuItem>
  </Select>
</div>

            <TextField
              label="Land Area"
              variant="outlined" required fullWidth
              name="landarea"
              value={newSeller.landarea}
              onChange={handleInputChange}
            />
            <TextField
              label="Land Address"
              variant="outlined" required fullWidth
              name="landaddress"
              value={newSeller.landaddress}
              onChange={handleInputChange}
            />
            <TextField
              label="Land Cost"
              variant="outlined" required fullWidth
              name="landcost"
              value={newSeller.landcost}
              onChange={handleInputChange}
            />
          
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Add Seller
            </Button>
          </form>
        </Paper>
      </Stack>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer/>
    </Stack>
);
}

