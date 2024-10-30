import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import { Grid, Select, MenuItem, Button, Typography, Card, CardContent, Stack } from '@mui/material';


function Homepage() {
  const [producttype, setproducttype] = useState('');
  const [searchStatus, setSearchStatus] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

 
  const [searchClicked, setSearchClicked] = useState(false);
 



   
  
  // State to track if the search button is clicked
  const uri = "http://localhost:5000/api/seller";

  useEffect(() => {
    if (searchClicked && producttype && producttype.trim() !== '') {
      // Fetch data by category only when the search button is clicked and category is not empty
      Axios.get(`${uri}/seller/${producttype}`)
        .then((res) => {
          setData2(res.data);
          setSearchStatus(true);
        })
        .catch((error) => {
          console.error('Error fetching data by producttype: ', error);
          setData2([]);
          setSearchStatus(true);
        });
    } else {
      // Fetch all data when the search button is clicked and productype is empty
      Axios.get(uri)
        .then((res) => {
          setData(res.data);
          setSearchStatus(true);
        })
        .catch((error) => {
          console.error('Error fetching all data: ', error);
          setData([]);
          setSearchStatus(true);
        });
    }
    // Reset the search button click state after fetching data
    setSearchClicked(false);
  }, [searchClicked, producttype]);

  const handleSearchChange = (event) => {
    setproducttype(event.target.value);
  };

 

  const handleData = () => {
    // Set search button click state to true when the search button is clicked
    setSearchClicked(true);
  };

  return (
    <div>
      <Navbar />
      
      <Stack sx={{ m: 10 }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Select
  variant="outlined"
  value={producttype}
  onChange={handleSearchChange}
  fullWidth
  size="large"
  displayEmpty
  inputProps={{ 'aria-label': 'Select search term' }}
  sx={{ backgroundColor: 'white' }}
>
  <MenuItem value="">
    <em>No Selection</em>
  </MenuItem>
                   <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Bungalow">Bungalow</MenuItem>
                  <MenuItem value="Flat">Flat</MenuItem>
                  <MenuItem value="Field">Field</MenuItem>
                  <MenuItem value="House Land">House Land</MenuItem>
                  <MenuItem value="Farm House">Farm House</MenuItem>
                  <MenuItem value="Apartment">Apartment</MenuItem>
</Select>

          <Button variant="contained" color="primary" onClick={handleData}>
            Search
          </Button>
        </div>
        <p>Explore our wide range of properties at the best prices!</p>
        </Stack>
        <Stack direction ="row" spacing="1" sx={{width:1400,m:4}}>
        <Stack sx={{marginLeft:6,width:1650}}>
        {/* Render the retrieved data using Grid and Card components */}
        {searchStatus && ((producttype && producttype.trim() !== '') ? data2 : data).length > 0 && (
          <Grid container spacing={9}>
            {((producttype && producttype.trim() !== '') ? data2 : data).map((seller,index) => (
              <Grid item  xs={12} sm={6} key={{index}}>
              <Card sx={{ backgroundColor: '#f0f0f0' }}>
                <CardContent>
                 <Stack direction="row">
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
                  <Stack>
                  <img src={seller.imgurl} alt="Seller Image" style={{ width: '250px', height: '200px', marginLeft:'100px'}} /></Stack></Stack>
                </CardContent>
              </Card>
            </Grid>
  
            ))}
          </Grid>
        )}</Stack>
     
   
     </Stack>
    </div>
  );
}

export default Homepage;
