import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Stack, Card, CardContent, Grid, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'; // Import Link for navigation

import Footer from './Footer';

export default function Buyer() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    axios.get('https://modern-flip-flops-cod.cyclic.app/api/seller')
      .then((res) => {
        setSellers(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/seller/${_id}`);
      const updateData = sellers.filter(item => item._id !== _id);
      setSellers(updateData);
    } catch (error) {
      console.error({ "error deleting ": error });
    }
  };

  return (
    <Stack spacing={5} padding={3}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/login"
        style={{ marginBottom: '20px' }}
      >
        Logout
      </Button>
      <Grid container spacing={2}>
        {sellers.map((seller, index) => (
          <Grid item key={index} xs={5} sm={4}>
            <Card sx={{ backgroundColor: '#f0f0f0' }}>
              <CardContent>
                <IconButton
                  aria-label="Delete"
                  onClick={() => handleDelete(seller._id)}
                  style={{ float: 'right' }}
                >
                  <DeleteIcon />
                </IconButton>
                <Typography variant="h6" gutterBottom>
                  Seller Information
                </Typography>
                <Stack >
                <Stack>
                <Typography variant="subtitle1">Seller Name: {seller.sellername}</Typography>
                <Typography variant="subtitle1">Seller ID: {seller.sellerid}</Typography>
                <Typography variant="subtitle1">Phone: {seller.sellerphno}</Typography>
                <Typography variant="subtitle1">Email: {seller.selleremail}</Typography>
                <Typography variant="subtitle1">Address: {seller.selleraddress}</Typography>
                <Typography variant="subtitle1">Land Area: {seller.landarea}</Typography>
                <Typography variant="subtitle1">Land Address: {seller.landaddress}</Typography>
                <Typography variant="subtitle1">Land Cost: {seller.landcost}</Typography>
                <Typography variant="subtitle1">Property Type: {seller.producttype}</Typography></Stack>
                <Stack> <img src={seller.imgurl} alt="Seller Image" style={{ width: '250px', height: '200px', marginLeft:'100px'}} />
                </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Stack>
  );
}
